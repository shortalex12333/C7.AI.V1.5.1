#!/bin/bash

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

REPORTS_DIR="./reports"
TIMESTAMP=$(date +%F-%H%M%S)

# Ensure reports dir exists
mkdir -p "$REPORTS_DIR"

# Local file checks
check_file() {
  local file="$1"
  if [ ! -f "out/$file" ]; then
    echo -e "${RED}❌ Missing $file in out/${NC}"
    exit 1
  else
    echo -e "${GREEN}✅ $file found in out/${NC}"
  fi
}

check_file "index.html"
check_file "404.html"
check_file "favicon.ico"
check_file "robots.txt"

# Folder structure
if [ ! -d "out/_next" ]; then
  echo -e "${RED}❌ _next/ folder not found in out/${NC}"
  exit 1
else
  echo -e "${GREEN}✅ _next/ folder found in out/${NC}"
fi

# Smoke test function (local)
smoke_test_local() {
  local file="$1"
  local expect_phrase="$2"
  if ! grep -i "$expect_phrase" "out/$file" > /dev/null; then
    echo -e "${RED}❌ $file does not contain expected phrase: $expect_phrase${NC}"
    exit 1
  fi
  echo -e "${GREEN}✅ $file passed content check${NC}"
}

smoke_test_local "index.html" "celeste"
smoke_test_local "404.html" "404"
smoke_test_local "settings/index.html" "settings" || true
smoke_test_local "my-brand/index.html" "brand" || true

# Broken link scan (using htmlproofer if available)
if command -v htmlproofer &> /dev/null; then
  htmlproofer ./out --only-4xx --check-external-hash --allow-hash-href || exit 1
  echo -e "${GREEN}✅ Broken link scan passed${NC}"
else
  echo -e "${RED}⚠ htmlproofer not found. Skipping broken link scan. Install with: gem install html-proofer${NC}"
fi

echo -e "${GREEN}✅ All local deployment verification checks passed!${NC}"
exit 0 