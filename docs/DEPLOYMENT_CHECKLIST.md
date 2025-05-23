# Deployment Checklist

Use this checklist to verify successful deployment of celeste7.ai.

## Pre-deployment Checks

- [ ] All tests passing locally
- [ ] Code review completed
- [ ] Dependencies up to date
- [ ] Environment variables configured
- [ ] Build tested locally

## Pipeline Verification

- [ ] Pipeline ran without errors
- [ ] All build stages completed successfully
- [ ] No warnings in build logs
- [ ] Build artifacts generated correctly

## S3 Verification

- [ ] S3 bucket has correct file structure
- [ ] index.html is at root
- [ ] 404.html exists
- [ ] Static assets present in _next directory
- [ ] No old files remaining
- [ ] File permissions correct

## CloudFront Verification

- [ ] CloudFront invalidation completed
- [ ] No stale cache (verified by checking timestamp)
- [ ] Distribution status is "Deployed"
- [ ] SSL certificate valid

## Website Verification

- [ ] Site loads on domain (https://celeste7.ai)
- [ ] HTTP status code is 200 OK
- [ ] Page content is valid (not error page)
- [ ] 404 page works correctly
- [ ] Internal routes accessible
- [ ] No console errors
- [ ] No broken images or assets

## UI/UX Verification

- [ ] Header renders correctly
- [ ] Footer renders correctly
- [ ] Navigation works
- [ ] Responsive design works
- [ ] No layout shifts
- [ ] No broken links
- [ ] Forms work correctly (if applicable)

## Smoke Tests

- [ ] Home page loads
- [ ] 404 page works
- [ ] Internal routes accessible
- [ ] Critical user flows work
- [ ] No JavaScript errors
- [ ] No CSS issues

## Performance

- [ ] Page load time acceptable
- [ ] No large assets
- [ ] Images optimized
- [ ] No render-blocking resources
- [ ] Core Web Vitals in acceptable range

## Monitoring

- [ ] CloudWatch metrics configured
- [ ] Error logging enabled
- [ ] Performance monitoring active
- [ ] Health checks passing
- [ ] Alerts configured

## Documentation

- [ ] Deployment logged
- [ ] Any issues documented
- [ ] Rollback plan ready
- [ ] Team notified of deployment

## Post-deployment

- [ ] Verify in production environment
- [ ] Check analytics tracking
- [ ] Monitor error rates
- [ ] Watch for any user reports
- [ ] Document any issues found

## Rollback Plan

If issues are found:
1. Identify the problem
2. Determine if rollback is needed
3. Execute rollback if necessary:
   ```bash
   # Revert to previous version
   aws s3 sync s3://celeste7.ai-backup/ s3://celeste7.ai/
   aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
   ```
4. Verify rollback success
5. Document the incident

## Notes

- Keep this checklist updated as new requirements are added
- Add any site-specific checks as needed
- Document any special considerations
- Update monitoring thresholds as needed 