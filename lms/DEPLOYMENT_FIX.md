# Deployment Fix for Progress Not Updating

## Problem
Progress data not showing correctly after deployment due to:
1. Next.js build cache
2. Browser cache
3. Subject code case mismatch (lowercase vs uppercase)

## Solution Steps

### 1. Clear Next.js Build Cache
```bash
# Navigate to your project directory
cd LMS/lms

# Delete .next folder
rm -rf .next

# Delete node_modules/.cache (if exists)
rm -rf node_modules/.cache

# Rebuild
npm run build
```

### 2. Force Browser Cache Clear
After deployment, users should:
- Press `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
- Or open DevTools (F12) → Network tab → Check "Disable cache"

### 3. Database Migration (If Needed)
If you have existing progress data with lowercase subject codes, run this MongoDB script:

```javascript
// Connect to your MongoDB database
use your_database_name;

// Update all lowercase subject codes to uppercase
db.progress.updateMany(
  { subject: "nss" },
  { $set: { subject: "NSS" } }
);

db.progress.updateMany(
  { subject: "ds" },
  { $set: { subject: "DS" } }
);

db.progress.updateMany(
  { subject: "es" },
  { $set: { subject: "ES" } }
);

db.progress.updateMany(
  { subject: "os" },
  { $set: { subject: "OS" } }
);

db.progress.updateMany(
  { subject: "ls" },
  { $set: { subject: "LS" } }
);

db.progress.updateMany(
  { subject: "flat" },
  { $set: { subject: "FLAT" } }
);

db.progress.updateMany(
  { subject: "fswd" },
  { $set: { subject: "FSWD" } }
);

// Verify the changes
db.progress.distinct("subject");
```

### 4. Deployment Commands (Vercel/Netlify)

#### For Vercel:
```bash
# Clear build cache and redeploy
vercel --prod --force
```

#### For Netlify:
```bash
# Clear cache and redeploy
netlify deploy --prod --clear-cache
```

### 5. Verify Changes
After deployment:
1. Open browser in incognito/private mode
2. Login and check progress
3. Open DevTools Console and check for API calls:
   - `/api/progress?userEmail=...&subject=NSS` (should be uppercase)
4. Verify response data has correct subject codes

## Files Changed
All CourseOverview components now use UPPERCASE subject codes:
- ✅ `/pages/nss/components/CourseOverview.tsx` → `subject=NSS`
- ✅ `/pages/ds/components/CourseOverview.tsx` → `subject=DS`
- ✅ `/pages/es/components/CourseOverview.tsx` → `subject=ES`
- ✅ `/pages/os/components/CourseOverview.tsx` → `subject=OS`
- ✅ `/pages/ls/components/CourseOverview.tsx` → `subject=LS`
- ✅ `/pages/flat/components/CourseOverview.tsx` → `subject=FLAT`
- ✅ `/pages/fswd/components/CourseOverview.tsx` → `subject=FSWD`

## Quick Fix Commands
```bash
# One-liner to clean and rebuild
rm -rf .next node_modules/.cache && npm run build

# For production deployment
npm run build && vercel --prod --force
```
