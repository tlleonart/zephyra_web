# Quickstart: Tester Fixes

**Date**: 2026-03-13
**Branch**: `002-tester-fixes`

## Prerequisites

- Existing Zephyra dev environment set up (see `specs/001-zephyra-admin-dashboard/quickstart.md`)
- Convex dev server running (`npx convex dev`)
- Next.js dev server running (`npm run dev`)

## Changes Overview

### 1. Navbar - Add "Equipo" link

**File**: `src/components/public/Navbar/Navbar.tsx`

Add to `navLinks` array between "Servicios" and "Proyectos":
```typescript
{ href: '/#equipo', label: 'Equipo' },
```

**Verification**: Navigate to any page, click "Equipo" in navbar → should scroll to team section on homepage.

### 2. Team Photo Position Editor

**Files to modify**:
1. `convex/schema.ts` - Add `imagePositionX` and `imagePositionY` optional fields
2. `convex/teamMembers.ts` - Update create/update mutations and listPublic/getById queries
3. `src/features/team/components/TeamForm/TeamForm.tsx` - Add range sliders + circular preview
4. `src/components/public/TeamSection/TeamSection.tsx` - Apply `object-position` style

**Verification**:
1. Go to `/admin/team/new` or edit existing member
2. Upload a photo
3. Adjust horizontal/vertical sliders
4. Verify circular preview updates in real-time
5. Save and check public homepage team section

### 3. Terminology Fix

**Files to modify**:
1. `convex/seedContent.ts` - Replace "sustentabilidad" → "sostenibilidad", "sustentable" → "sostenible"
2. `src/lib/staticImages.ts` - Update slug key mapping

**Verification**: Search codebase for "sustentabilidad" and "sustentable" → zero results.

## Build & Test

```bash
# Type check
npx tsc --noEmit

# Build
npm run build

# Run dev server and test manually
npm run dev

# Playwright tests (if configured)
npm run test:e2e
```
