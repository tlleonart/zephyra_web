# Research: Team Editor Fixes

**Date**: 2026-03-14
**Feature**: 004-team-editor-fixes

## Research Findings

### 1. Team Member Reorder Backend Status

**Decision**: The `reorder` mutation already exists in `convex/teamMembers.ts` and works correctly. The `listPublic` query already sorts by `displayOrder` via the `by_visible_order` composite index. The only missing piece is the admin UI for reordering.

**Rationale**: The backend is complete. The admin `TeamList` component displays a table but has no reorder controls (no drag-and-drop, no up/down buttons). Adding up/down arrow buttons to the existing table is the simplest approach consistent with the codebase pattern (other entities like services also have a `reorder` mutation with `orderedIds` array).

**Alternatives considered**:
- Drag-and-drop: Rejected - requires a library dependency (e.g., dnd-kit) that doesn't exist in the project. Overkill for a team of under 20 members.
- Separate reorder page: Rejected - unnecessary navigation. Inline buttons in the existing list are simpler.

### 2. Image Position Editor Status

**Decision**: The position editor (horizontal/vertical sliders + 120px circular preview) already exists in `TeamForm.tsx` from the 002-tester-fixes feature. The `imagePositionX` and `imagePositionY` fields exist in the schema, mutations accept them, and the public `TeamSection` applies them via `objectPosition` CSS. The implementation needs verification and potential refinement to ensure the admin preview exactly matches the public rendering.

**Rationale**: The circular preview in the admin form uses a 120px circle with `object-fit: cover` and `object-position`, which matches the public `TeamSection` rendering (also 120px circle with the same CSS). The existing implementation should work. The fix may involve ensuring the preview image URL loads correctly and that the rendering is pixel-perfect.

**Key finding**: The admin preview already uses `useQuery(api.files.getUrl, ...)` for the image URL with a fallback to `initialData?.imageUrl`. The public site uses `getTeamMemberImage()` utility which resolves Convex storage URLs. Both use the same `objectPosition` pattern.

### 3. Reorder UX Pattern

**Decision**: Use up/down arrow buttons in the existing table's actions column. Each click swaps the member with the adjacent one and calls the `reorder` mutation with the full reordered ID array.

**Rationale**: This is the simplest UX pattern that doesn't require new dependencies. The team is small (under 20 members), so sequential button clicks are efficient enough. The existing `reorder` mutation accepts an `orderedIds` array, which is the same pattern used by services.

**Key finding**: The `reorder` mutation iterates through the array and patches `displayOrder = index` for each member. This means we just need to compute the new order on the client and send the full sorted array.

### 4. Public TeamSection Query Verification

**Decision**: The `listPublic` query correctly sorts by `displayOrder` via the `by_visible_order` composite index (`[isVisible, displayOrder]`). No backend changes needed for display order to work once the admin can set it.

**Rationale**: Verified that the Convex index `by_visible_order` filters by `isVisible: true` first, then sorts by `displayOrder`. The query also filters `deletedAt === undefined`. The public rendering iterates the returned array in order.

### 5. Existing Position Editor Verification

**Decision**: Review and verify the existing position editor implementation to ensure it matches the public rendering. Specific checks: preview circle size matches public (120px), `object-fit: cover` is used consistently, and the `objectPosition` values map correctly from admin to public.

**Rationale**: The user reported the image editing is "not working as expected." Since the code was implemented in 002-tester-fixes, there may be subtle mismatches. The plan should include a verification task to compare admin preview vs public rendering and fix any discrepancies.

**Key finding**: Both admin preview and public rendering use:
- 120px circular container with `border-radius: 50%`
- `object-fit: cover` on the image
- `objectPosition: \`${x}% ${y}%\`` for positioning
- These should produce identical results if the CSS is consistent.
