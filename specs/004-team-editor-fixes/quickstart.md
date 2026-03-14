# Quickstart: Team Editor Fixes

**Date**: 2026-03-14
**Branch**: `004-team-editor-fixes`

## Prerequisites

- Existing Zephyra dev environment set up
- Convex dev server running (`npx convex dev`)
- Next.js dev server running (`npm run dev`)
- Seed data loaded (team members exist in database)

## Changes Overview

### 1. Team Member Reordering

**Modified file**: `src/features/team/components/TeamList/TeamList.tsx`

**Verification**:
1. Go to `/admin/team`
2. Verify up/down arrow buttons appear next to each team member
3. Click the "down" arrow on the first member
4. Verify the member moves to second position and the list updates
5. Click the "up" arrow on the second member
6. Verify the member returns to first position
7. Verify the first member has no "up" button and the last has no "down" button
8. Navigate to the public site homepage
9. Scroll to the team section
10. Verify team members appear in the exact order set in the admin

### 2. Image Position Preview

**Modified file**: `src/features/team/components/TeamForm/TeamForm.tsx` (verify/fix)

**Verification**:
1. Go to `/admin/team` and edit a team member with a photo
2. Verify the circular preview (120px) appears showing the current photo position
3. Move the horizontal slider left/right
4. Verify the image pans horizontally within the circle in real time
5. Move the vertical slider up/down
6. Verify the image pans vertically within the circle in real time
7. Click "Restablecer al centro" (Reset to center)
8. Verify position resets to 50%/50%
9. Save the team member
10. Navigate to the public team section
11. Verify the photo appears with the exact same crop as the admin preview

### 3. Cross-check: Order + Position Together

1. Reorder team members in admin
2. Edit a member's photo position
3. Visit public site
4. Verify both order AND photo positioning are correct simultaneously

## Build & Test

```bash
# Type check
npx tsc --noEmit

# Build
npm run build

# Run dev server and test manually
npm run dev
```
