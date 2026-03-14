# Tasks: Team Editor Fixes

**Input**: Design documents from `/specs/004-team-editor-fixes/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

---

## Phase 1: Foundational (Verification)

**Purpose**: Verify backend is correct before making UI changes. No schema or backend modifications expected.

- [x] T001 Verify `convex/teamMembers.ts` has a working `reorder` mutation that accepts `orderedIds: v.array(v.id("teamMembers"))` and patches `displayOrder` for each member. Verify `listPublic` query uses `by_visible_order` index to sort visible members by `displayOrder`. Read-only verification, no changes expected.

**Checkpoint**: Backend confirmed working. UI implementation can proceed.

---

## Phase 2: User Story 1 - Team Member Reordering (Priority: P1)

**Goal**: Admins can reorder team members from the admin list, and the public site displays members in the admin-defined order.

**Independent Test**: Go to `/admin/team`, use up/down arrows to reorder members, then visit the public homepage team section and verify the order matches.

### Implementation for User Story 1

- [x] T002 [US1] Add reorder functionality to `src/features/team/components/TeamList/TeamList.tsx`: import `useMutation(api.teamMembers.reorder)`, add up/down arrow buttons to the table (either as a new column or within the actions column), implement `handleMoveUp(index)` and `handleMoveDown(index)` that swap adjacent members and call `reorder({ orderedIds })` with the full reordered ID array. Disable "up" on first item, "down" on last item.
- [x] T003 [US1] Add reorder button styles to `src/features/team/components/TeamList/TeamList.module.css`: styles for `.reorderButton` (small arrow buttons, subtle appearance consistent with existing ghost buttons), `.reorderButton:disabled` (reduced opacity), and ensure buttons align well within the table row.
- [x] T004 [US1] Verify `src/components/public/TeamSection/TeamSection.tsx` renders members in the order returned by `listPublic` (which is sorted by `displayOrder`). Confirm the iteration over members preserves order. Read and verify, fix only if broken.

**Checkpoint**: Reordering works end-to-end. Admin changes order, public site reflects it.

---

## Phase 3: User Story 2 - Image Position Preview and Editing (Priority: P2)

**Goal**: The admin circular preview in the team member form exactly matches the public site rendering, and position adjustments are applied correctly on both.

**Independent Test**: Edit a team member photo in `/admin/team/[id]/edit`, adjust position with sliders, save, then check the public team section for an exact match.

### Implementation for User Story 2

- [x] T005 [US2] Compare the circular preview CSS in `src/features/team/components/TeamForm/TeamForm.module.css` (`.positionPreview`, `.positionPreviewImage`) against the public rendering CSS in `src/components/public/TeamSection/TeamSection.module.css` (`.imageWrapper`, `.image`). Ensure both use identical: container size (120px), `border-radius: 50%`, `overflow: hidden`, `object-fit: cover`. Fix any discrepancies to make the admin preview pixel-perfect match the public rendering.
- [x] T006 [US2] Verify `src/features/team/components/TeamForm/TeamForm.tsx` position editor: confirm that (1) the circular preview appears when a photo is uploaded, (2) sliders update `objectPosition` in real time, (3) position resets to 50/50 on new upload, (4) the "Restablecer al centro" button works, (5) initial data loads saved position correctly in edit mode. Fix any issues found.
- [x] T007 [US2] Verify `src/components/public/TeamSection/TeamSection.tsx` applies `objectPosition` using `imagePositionX` and `imagePositionY` from the query result. Confirm the `style={{ objectPosition: \`${member.imagePositionX ?? 50}% ${member.imagePositionY ?? 50}%\` }}` pattern is correct. Fix if broken.

**Checkpoint**: Image position set in admin preview matches public rendering exactly.

---

## Phase 4: Polish & Verification

**Purpose**: Final validation across all changes.

- [x] T008 Run `npx tsc --noEmit` and `npm run build` to verify zero type errors and zero build errors.
- [x] T009 Run full quickstart.md verification: reorder team members in admin, edit a photo position, check public site for both order and image positioning correctness.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Foundational)**: No dependencies - start immediately
- **Phase 2 (US1 - Reordering)**: Depends on Phase 1 verification
- **Phase 3 (US2 - Image Preview)**: Depends on Phase 1 verification. Can run in parallel with Phase 2.
- **Phase 4 (Polish)**: Depends on all previous phases.

### User Story Dependencies

- **US1 (Reordering)**: Independent. No dependency on US2.
- **US2 (Image Preview)**: Independent. No dependency on US1.

### Parallel Opportunities

```text
# After Phase 1 completes, these can run in parallel:
T002, T003 [US1] Reorder UI (same component, sequential)
T005, T006, T007 [US2] Image preview verification (T005 and T007 are different files, parallel)

# T004 [US1] and T007 [US2] both read TeamSection.tsx but don't modify the same code
```

---

## Implementation Strategy

### MVP First (US1 Only)

1. Phase 1: Verify backend (T001)
2. Phase 2: Reorder UI (T002-T004)
3. **STOP and VALIDATE**: Admin can reorder, public shows correct order
4. This delivers the highest-priority fix

### Full Delivery

5. Phase 3: Image preview verification (T005-T007)
6. Phase 4: Build verification + quickstart validation (T008-T009)

---

## Notes

- No schema or backend changes needed. All changes are in the admin frontend.
- The `reorder` mutation and position fields already exist and were verified in research.
- Tasks T004, T005, T006, T007 are primarily verification tasks - read the code first, fix only if issues are found.
- Commit after each phase.
