# Convex Changes: Team Editor Fixes

**Date**: 2026-03-14
**Feature**: 004-team-editor-fixes

## Schema Changes

**None required.** All fields and indexes already exist.

## Backend Changes

**None required.** All mutations and queries already exist and work correctly:

- `teamMembers.list` - returns all non-deleted members ordered by `displayOrder`
- `teamMembers.listPublic` - returns visible, non-deleted members ordered by `displayOrder`
- `teamMembers.getById` - returns single member with image URL
- `teamMembers.create` - accepts `imagePositionX`, `imagePositionY`
- `teamMembers.update` - accepts `imagePositionX`, `imagePositionY`
- `teamMembers.reorder` - accepts `orderedIds` array, patches `displayOrder`

## Frontend Changes Required

### 1. TeamList Component (`src/features/team/components/TeamList/TeamList.tsx`)

**Add**: Reorder controls (up/down arrow buttons) in the table.

- Import and use `useMutation(api.teamMembers.reorder)`
- Add a new column or modify the actions column to include up/down arrow buttons
- Implement `handleMoveUp(index)` and `handleMoveDown(index)`:
  - Swap the member at `index` with the one above/below
  - Compute the full `orderedIds` array from the current list
  - Call `reorder({ orderedIds })`
- Disable "up" on first item, "down" on last item

### 2. TeamForm Component (`src/features/team/components/TeamForm/TeamForm.tsx`)

**Verify**: The existing position editor (sliders + 120px circular preview) works correctly and matches the public site rendering.

- Confirm the circular preview uses identical CSS to `TeamSection`:
  - 120px width/height
  - `border-radius: 50%`
  - `object-fit: cover`
  - `objectPosition` with the same % values
- Confirm image URL resolution works for both new uploads and existing images
- Fix any discrepancies found

### 3. TeamSection Component (`src/components/public/TeamSection/TeamSection.tsx`)

**Verify**: Members display in `displayOrder` and `objectPosition` is applied correctly.

- No changes expected unless verification reveals issues.
