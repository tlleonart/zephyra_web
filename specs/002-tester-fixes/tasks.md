# Tasks: Tester Fixes - Navbar, Team Photos & Terminology

**Input**: Design documents from `/specs/002-tester-fixes/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Foundational (Schema Changes)

**Purpose**: Backend schema change that must deploy before the photo position editor can work

- [x] T001 Add `imagePositionX` and `imagePositionY` optional number fields to the `teamMembers` table in `convex/schema.ts`

**Checkpoint**: Schema deployed to Convex. Existing records unaffected (new fields are optional).

---

## Phase 2: User Story 1 - Add "Equipo" Link to Navbar (Priority: P1)

**Goal**: Visitors can navigate to the team section from any page via the navbar "Equipo" link.

**Independent Test**: Click "Equipo" in navbar from homepage and from /blog → both scroll to team section. Test mobile hamburger menu too.

### Implementation for User Story 1

- [x] T002 [US1] Add `{ href: '/#equipo', label: 'Equipo' }` to the `navLinks` array in `src/components/public/Navbar/Navbar.tsx`, positioned between "Servicios" and "Proyectos"

**Checkpoint**: "Equipo" link visible in navbar on desktop and mobile. Clicking it from any page navigates to homepage team section.

---

## Phase 3: User Story 3 - Replace "sustentabilidad" with "sostenibilidad" (Priority: P1)

**Goal**: Zero occurrences of "sustentabilidad" or "sustentable" remain in the codebase.

**Independent Test**: Search codebase for "sustentabilidad" and "sustentable" (case-insensitive) → zero results.

### Implementation for User Story 3

- [x] T003 [P] [US3] Replace all "sustentabilidad" → "sostenibilidad" and "sustentable" → "sostenible" in `convex/seedContent.ts` (10 occurrences: service titles/descriptions at lines ~62-82, project title/slug/excerpt/description at lines ~95-102)
- [x] T004 [P] [US3] Update slug key `'programa-sustentabilidad-corporativa'` → `'programa-sostenibilidad-corporativa'` in `src/lib/staticImages.ts` (line ~40). Also rename the image file path value if applicable.
- [x] T005 [US3] Verify zero occurrences remain by searching entire codebase for "sustentabilidad" and "sustentable" (case-insensitive)

**Checkpoint**: `grep -ri "sustentabilidad\|sustentable" --include="*.ts" --include="*.tsx"` returns zero results.

---

## Phase 4: User Story 2 - Team Photo Position Editor in Admin (Priority: P2)

**Goal**: Admins can adjust team photo crop position with real-time circular preview; public site reflects saved position.

**Independent Test**: Upload photo in admin team form, adjust sliders, verify preview matches, save, verify public site renders with correct position.

### Implementation for User Story 2

- [x] T006 [P] [US2] Update `create` and `update` mutations in `convex/teamMembers.ts` to accept optional `imagePositionX` and `imagePositionY` number arguments (0-100), and include them in the insert/patch calls
- [x] T007 [P] [US2] Update `listPublic` and `getById` queries in `convex/teamMembers.ts` to return `imagePositionX` and `imagePositionY` fields in their response objects
- [x] T008 [US2] Add photo position editor UI to `src/features/team/components/TeamForm/TeamForm.tsx`: two range slider inputs (Horizontal 0-100, Vertical 0-100) shown when a photo is uploaded, with a 120px circular preview that applies `object-position: {X}% {Y}%`. Include state management for position values (default 50), reset to 50/50 on new photo upload, and pass values to create/update mutations
- [x] T009 [US2] Update `src/components/public/TeamSection/TeamSection.tsx` to apply `style={{ objectPosition: \`${imagePositionX ?? 50}% ${imagePositionY ?? 50}%\` }}` on the `Image` component for each team member
- [x] T010 [US2] Update `src/app/(dashboard)/admin/team/[id]/edit/EditTeamMemberContent.tsx` to pass `imagePositionX` and `imagePositionY` from the fetched member data to `TeamForm` via `initialData`

**Checkpoint**: Full round-trip works: admin adjusts position → saves → public site shows correct crop position. Default center behavior preserved for existing members without position data.

---

## Phase 5: Polish & Verification

**Purpose**: Final validation across all three fixes

- [x] T011 Run `npm run build` and `npx tsc --noEmit` to verify zero build errors and zero type errors
- [x] T012 Run Playwright browser tests: verify navbar "Equipo" link works from homepage and from /blog, verify admin team form shows position editor with preview, verify public team section applies position

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Foundational)**: No dependencies - start immediately
- **Phase 2 (US1 - Navbar)**: No dependencies on Phase 1 - can run in parallel
- **Phase 3 (US3 - Terminology)**: No dependencies - can run in parallel with everything
- **Phase 4 (US2 - Photo Position)**: Depends on Phase 1 (schema must be deployed first)
- **Phase 5 (Polish)**: Depends on all previous phases

### User Story Dependencies

- **US1 (Navbar)**: Fully independent. No schema changes, no backend work.
- **US3 (Terminology)**: Fully independent. Text replacements only.
- **US2 (Photo Position)**: Depends on schema change (T001). Backend (T006, T007) and frontend (T008, T009, T010) can be done sequentially.

### Parallel Opportunities

```text
# These can ALL run in parallel:
T002 [US1] Navbar link addition
T003 [US3] Seed content terminology fix
T004 [US3] Static images slug fix
T001       Schema change

# After T001 completes, these can run in parallel:
T006 [US2] Mutation updates
T007 [US2] Query updates

# After T006+T007 complete:
T008 [US2] Admin form position editor
T009 [US2] Public site position rendering (can parallel with T008)
T010 [US2] Edit page initialData pass-through (after T008)
```

---

## Implementation Strategy

### MVP First (US1 + US3)

1. T001 (schema) + T002 (navbar) + T003+T004 (terminology) → all in parallel
2. **STOP and VALIDATE**: Navbar works, terminology clean
3. These two P1 stories deliver immediate value with minimal risk

### Full Delivery

4. T006+T007 (backend mutations/queries)
5. T008 (admin position editor) + T009 (public rendering) in parallel
6. T010 (edit page data pass-through)
7. T011+T012 (build verification + Playwright)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- The `id="equipo"` already exists on the TeamSection component - no HTML change needed (confirmed in research.md)
- Schema change (T001) is backward-compatible: existing records without position values default to center (50/50)
- Commit after each phase or logical group
