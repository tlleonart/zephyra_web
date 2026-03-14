# Contract: No Backend Changes

**Feature**: 005-services-redesign | **Date**: 2026-03-14

## Statement

This feature is a **pure frontend visual redesign**. No changes are required to:

- Convex schema or data model
- Convex queries or mutations (`serviceBlocks.listPublic`, `serviceBlocks.create`, `serviceBlocks.update`, etc.)
- API routes or server-side logic
- Admin panel forms or management interfaces
- Image upload or storage configuration

## Data Contract

The existing `serviceBlocks.listPublic` query returns data in this shape (unchanged):

```typescript
Array<{
  _id: Id<'serviceBlocks'>;
  title: string;
  subtitle: string;
  imageUrl?: string;  // Convex storage URL, may be undefined
  services: Array<{
    _id: Id<'services'>;
    title: string;
    description: string;
    iconName: string;  // Material Icons name
  }>;
}>
```

## Component Contract

**ServicesSection.tsx** will continue to:
- Call `useQuery(api.serviceBlocks.listPublic)` for data
- Render loading skeletons while `blocks === undefined`
- Render empty state when `blocks.length === 0`
- Render block headers with image, title, subtitle
- Render service cards with icon, title, description

**Changes are limited to**:
- Adding CSS class for alternating layout (`:nth-child` based — no JSX logic needed beyond ensuring the wrapper always renders)
- Adding `tabIndex={0}` on cards for keyboard focus
- Ensuring `.blockImageWrapper` renders even without an image (for placeholder)
- CSS Module overhaul for layout, sizing, spacing, hover/focus effects

## Verification

After implementation, verify:
1. `npx tsc --noEmit` passes (no type errors)
2. `npm run build` succeeds (no build errors)
3. Existing admin CRUD for service blocks still works unchanged
4. Public services section renders correctly with existing data
