#!/bin/bash

echo "🔍 Verifying static site build output..."

if [ ! -f "./out/index.html" ]; then
  echo -e "\e[31m❌ Missing index.html\e[0m"
  exit 1
fi

if [ ! -f "./out/404.html" ]; then
  echo -e "\e[33m⚠️  Warning: 404.html not found\e[0m"
fi

if [ ! -d "./out/_next" ]; then
  echo -e "\e[33m⚠️  Warning: _next/ folder not found\e[0m"
fi

echo -e "\e[32m✅ Static site build verified\e[0m"
exit 0 