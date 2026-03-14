# Data Model: Team Editor Fixes

**Date**: 2026-03-14
**Feature**: 004-team-editor-fixes

## Entity Changes

### Team Member (existing - no changes)

**Table**: `teamMembers`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | yes | Full name |
| role | string | yes | Position title (e.g., "Cofundadora") |
| specialty | string | yes | Area of expertise |
| imageStorageId | id("_storage") | no | Reference to uploaded photo |
| imagePositionX | number | no | Horizontal position % (0-100, default 50) |
| imagePositionY | number | no | Vertical position % (0-100, default 50) |
| displayOrder | number | yes | Controls display ordering |
| isVisible | boolean | yes | Public visibility toggle |
| deletedAt | number | no | Soft delete timestamp |
| deletedBy | id("adminUsers") | no | Who deleted |

**Indexes** (existing):
- `by_order`: [displayOrder] - for admin list ordering
- `by_visible_order`: [isVisible, displayOrder] - for public queries
- `by_deleted`: [deletedAt] - for filtering soft-deleted records

## No Schema Changes Required

This feature does not modify the data model. All required fields (`displayOrder`, `imagePositionX`, `imagePositionY`) and mutations (`reorder`) already exist. The changes are entirely in the admin UI:

1. **Reorder UI**: Add up/down buttons to `TeamList` that call the existing `teamMembers.reorder` mutation.
2. **Image preview**: Verify and refine the existing position editor in `TeamForm` to match public rendering exactly.

## Data Flow

### Reorder - Write Path
1. Admin views team list (ordered by `displayOrder`)
2. Admin clicks up/down arrow on a team member
3. Client computes new order (swap with adjacent member)
4. Client calls `teamMembers.reorder` with full `orderedIds` array
5. Mutation patches `displayOrder` for each member
6. Real-time subscription updates both admin list and public site

### Image Position - Write Path
1. Admin opens team member edit form
2. Admin uploads photo or edits existing one
3. Circular preview shows current crop at saved position
4. Admin adjusts horizontal/vertical sliders
5. Preview updates in real time
6. Admin saves → `teamMembers.update` persists `imagePositionX` and `imagePositionY`

### Public Display - Read Path
1. `teamMembers.listPublic` fetches visible, non-deleted members sorted by `displayOrder`
2. For each member, resolves image URL from `imageStorageId`
3. `TeamSection` renders members in order with circular photos using saved `objectPosition`
