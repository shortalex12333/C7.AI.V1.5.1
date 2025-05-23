# Deployment Guide

This guide covers the deployment process for celeste7.ai and includes troubleshooting steps for common issues.

## Deployment Process

1. **Build Process**
   - Next.js app is built using `npm run build`
   - Static files are exported using `npm run export`
   - Build output is verified for required files

2. **Deployment Steps**
   - Files are uploaded to S3 bucket (celeste7.ai)
   - CloudFront cache is invalidated
   - Deployment is verified using verification script

## Common Issues and Solutions

### 1. Missing index.html

**Symptoms:**
- 404 error when accessing the site
- No index.html in S3 bucket root

**Solutions:**
1. Check build output:
   ```bash
   ls -la out/
   ```
2. Verify next.config.js settings:
   ```javascript
   output: 'export',
   trailingSlash: true
   ```
3. Check S3 bucket configuration:
   ```bash
   aws s3 ls s3://celeste7.ai/
   ```

### 2. CloudFront Cache Issues

**Symptoms:**
- Changes not reflecting on the site
- Old content still showing

**Solutions:**
1. Check invalidation status:
   ```bash
   aws cloudfront list-invalidations --distribution-id $CLOUDFRONT_DISTRIBUTION_ID
   ```
2. Force new invalidation:
   ```bash
   aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
   ```

### 3. Build Failures

**Symptoms:**
- Pipeline failing at build stage
- Missing dependencies

**Solutions:**
1. Check build logs in CodePipeline
2. Verify package.json dependencies
3. Clear build cache:
   ```bash
   rm -rf .next out node_modules
   npm install
   ```

### 4. S3 Upload Issues

**Symptoms:**
- Files not appearing in S3
- Permission errors

**Solutions:**
1. Check IAM permissions
2. Verify S3 bucket policy
3. Check AWS CLI configuration:
   ```bash
   aws configure list
   ```

## Verification Steps

1. **Pre-deployment**
   - Verify all required files are present
   - Check environment variables
   - Test build locally

2. **Post-deployment**
   - Run verification script:
     ```bash
     ./scripts/verify-deployment.sh
     ```
   - Check website accessibility
   - Verify CloudFront invalidation

## Monitoring

1. **CloudWatch Metrics**
   - 4xx errors
   - 5xx errors
   - Request latency

2. **Health Checks**
   - Website availability
   - API endpoints
   - Static asset delivery

## Rollback Procedure

1. **Quick Rollback**
   ```bash
   # Revert to previous version in S3
   aws s3 sync s3://celeste7.ai-backup/ s3://celeste7.ai/
   
   # Invalidate CloudFront cache
   aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
   ```

2. **Code Rollback**
   ```bash
   # Revert to previous commit
   git revert HEAD
   git push origin main
   ```

## Support

For deployment issues:
1. Check CloudWatch logs
2. Review CodePipeline execution history
3. Contact DevOps team at devops@ventruk.com

## Best Practices

1. **Before Deployment**
   - Test build locally
   - Review changes
   - Check dependencies

2. **During Deployment**
   - Monitor pipeline progress
   - Watch for errors
   - Keep deployment log

3. **After Deployment**
   - Verify website
   - Check monitoring
   - Document any issues 