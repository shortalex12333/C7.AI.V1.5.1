#!/bin/bash

set -e

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

REPORTS_DIR="./reports"
TIMESTAMP=$(date +%F-%H%M%S)
LIGHTHOUSE_REPORT_JSON="$REPORTS_DIR/lighthouse_report-$TIMESTAMP.json"
LIGHTHOUSE_REPORT_HTML="$REPORTS_DIR/lighthouse_report-$TIMESTAMP.html"

# Ensure reports dir exists
mkdir -p "$REPORTS_DIR"

echo "🔍 Starting deployment verification..."

# Check if index.html exists at root
echo "Checking index.html..."
if aws s3 ls s3://celeste7.ai/index.html > /dev/null 2>&1; then
    echo -e "${GREEN}✅ index.html found at root${NC}"
else
    echo -e "${RED}❌ index.html not found at root${NC}"
    exit 1
fi

# Check if 404.html exists
echo "Checking 404.html..."
if aws s3 ls s3://celeste7.ai/404.html > /dev/null 2>&1; then
    echo -e "${GREEN}✅ 404.html found${NC}"
else
    echo -e "${RED}❌ 404.html not found${NC}"
    exit 1
fi

# Check if static files are present
echo "Checking static files..."
if aws s3 ls s3://celeste7.ai/_next/ > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Static files found${NC}"
else
    echo -e "${RED}❌ Static files not found${NC}"
    exit 1
fi

# Check CloudFront invalidation status
echo "Checking CloudFront invalidation..."
INVALIDATION_ID=$(aws cloudfront list-invalidations --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --query 'InvalidationList.Items[0].Id' --output text)
if [ "$INVALIDATION_ID" != "None" ]; then
    STATUS=$(aws cloudfront get-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --id $INVALIDATION_ID --query 'Invalidation.Status' --output text)
    if [ "$STATUS" == "Completed" ]; then
        echo -e "${GREEN}✅ CloudFront invalidation completed${NC}"
    else
        echo -e "${RED}❌ CloudFront invalidation not completed${NC}"
        exit 1
    fi
else
    echo -e "${RED}❌ No CloudFront invalidation found${NC}"
    exit 1
fi

# Test website accessibility
echo "Testing website accessibility..."
if curl -s -f https://celeste7.ai > /dev/null; then
    echo -e "${GREEN}✅ Website is accessible${NC}"
else
    echo -e "${RED}❌ Website is not accessible${NC}"
    exit 1
fi

# Check HTTP status code
echo "Checking HTTP status code..."
if curl -s --head https://celeste7.ai | grep "200 OK" > /dev/null; then
    echo -e "${GREEN}✅ HTTP status code is 200 OK${NC}"
else
    echo -e "${RED}❌ HTTP status code is not 200 OK${NC}"
    exit 1
fi

# Check page content
echo "Checking page content..."
if curl -s https://celeste7.ai | grep "<title>" > /dev/null; then
    echo -e "${GREEN}✅ Page content is valid${NC}"
else
    echo -e "${RED}❌ Page content is invalid${NC}"
    exit 1
fi

# Smoke test function
smoke_test() {
  local url="$1"
  local expect_code="$2"
  local expect_phrase="$3"
  local code
  code=$(curl -s -o /dev/null -w "%{http_code}" "https://celeste7.ai$url")
  if [[ "$code" != "$expect_code" ]]; then
    echo -e "${RED}❌ $url returned $code, expected $expect_code${NC}"
    exit 1
  fi
  if ! curl -s "https://celeste7.ai$url" | grep -i "$expect_phrase" > /dev/null; then
    echo -e "${RED}❌ $url did not contain expected phrase: $expect_phrase${NC}"
    exit 1
  fi
  echo -e "${GREEN}✅ $url passed smoke test${NC}"
}

# Smoke tests
smoke_test "/" 200 "celeste"
smoke_test "/my-brand" 200 "brand"
smoke_test "/404" 404 "404"
smoke_test "/settings" 200 "settings" || true
smoke_test "/profile" 200 "profile" || true
smoke_test "/dashboard" 200 "dashboard" || true

# Asset checks
for asset in favicon.ico robots.txt; do
  if [ ! -f "out/$asset" ]; then
    echo -e "${RED}❌ Missing $asset in out/${NC}"
    exit 1
  else
    echo -e "${GREEN}✅ $asset found in out/${NC}"
  fi
}

# Lighthouse
if ! command -v lighthouse &> /dev/null; then
  echo -e "${RED}❌ Lighthouse CLI not found. Please install with: npm install -g lighthouse${NC}"
  exit 1
fi
lighthouse https://celeste7.ai --output json --output html --output-path "$REPORTS_DIR/lighthouse_report-$TIMESTAMP"

# Parse Lighthouse summary
SCORES=$(jq '.categories | {performance: .performance.score, accessibility: .accessibility.score, best_practices: .["best-practices"].score, seo: .seo.score}' "$LIGHTHOUSE_REPORT_JSON")
PERF=$(echo $SCORES | jq '.performance * 100')
ACC=$(echo $SCORES | jq '.accessibility * 100')
BEST=$(echo $SCORES | jq '.best_practices * 100')
SEO=$(echo $SCORES | jq '.seo * 100')
echo -e "\nLighthouse Scores:"
echo -e "Performance: $PERF"
echo -e "Accessibility: $ACC"
echo -e "Best Practices: $BEST"
echo -e "SEO: $SEO"

for score in $PERF $ACC $BEST $SEO; do
  if (( $(echo "$score < 80" | bc -l) )); then
    echo -e "${RED}❌ Lighthouse score below threshold: $score${NC}"
    exit 1
  fi
done

echo -e "${GREEN}✅ Lighthouse scores all above threshold${NC}"

# Broken link scan (using htmlproofer if available)
if command -v htmlproofer &> /dev/null; then
  htmlproofer ./out --only-4xx --check-external-hash --allow-hash-href || exit 1
  echo -e "${GREEN}✅ Broken link scan passed${NC}"
else
  echo -e "${RED}⚠ htmlproofer not found. Skipping broken link scan. Install with: gem install html-proofer${NC}"
fi

echo -e "${GREEN}✅ All deployment verification checks passed!${NC}"
exit 0 