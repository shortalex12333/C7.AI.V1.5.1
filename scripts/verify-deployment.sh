#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

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

# Run smoke tests
echo "Running smoke tests..."
echo "Testing home page..."
if curl -s https://celeste7.ai | grep -i "celeste" > /dev/null; then
    echo -e "${GREEN}✅ Home page content verified${NC}"
else
    echo -e "${RED}❌ Home page content invalid${NC}"
    exit 1
fi

echo "Testing 404 page..."
if curl -s https://celeste7.ai/nonexistent-page | grep -i "404" > /dev/null; then
    echo -e "${GREEN}✅ 404 page working correctly${NC}"
else
    echo -e "${RED}❌ 404 page not working correctly${NC}"
    exit 1
fi

echo "Testing internal route..."
if curl -s https://celeste7.ai/settings/my-brand | grep -i "my brand" > /dev/null; then
    echo -e "${GREEN}✅ Internal route accessible${NC}"
else
    echo -e "${RED}❌ Internal route not accessible${NC}"
    exit 1
fi

echo -e "${GREEN}✅ All verification checks passed!${NC}"
exit 0 