# Tasks: Service Blocks - Grouped Services with Images

**Input**: Design documents from `/specs/003-service-blocks/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Foundational (Schema & Backend)

**Purpose**: Database schema and backend operations that must be in place before any user story can proceed.

- [x] T001 Add `serviceBlocks` table to `convex/schema.ts` with fields: title (string), subtitle (string), imageStorageId (optional id), displayOrder (number), isActive (boolean), deletedAt (optional number), deletedBy (optional id). Add indexes: by_order, by_active_order, by_deleted.
- [x] T002 Add `blockId` (optional id("serviceBlocks")) and `blockDisplayOrder` (optional number) fields to the `services` table in `convex/schema.ts`. Add indexes: by_block [blockId] and by_block_order [blockId, blockDisplayOrder].
- [x] T003 Create `convex/serviceBlocks.ts` with CRUD mutations: `create` (title, subtitle, imageStorageId, isActive; auto displayOrder), `update` (id, optional fields), `remove` (id, adminUserId; soft-delete block AND clear blockId/blockDisplayOrder on assigned services), `reorder` (orderedIds array).
- [x] T004 Add service assignment mutations to `convex/serviceBlocks.ts`: `assignService` (blockId, serviceId; sets blockId and auto-assigns blockDisplayOrder), `removeService` (serviceId; clears blockId and blockDisplayOrder), `reorderServices` (blockId, orderedServiceIds; updates blockDisplayOrder).
- [x] T005 Add queries to `convex/serviceBlocks.ts`: `list` (all non-deleted blocks with service count and image URL), `getById` (single block with assigned services and image URL), `listForSelect` (minimal id+title for dropdown), `listPublic` (active non-deleted blocks with their active non-deleted services ordered; exclude empty blocks).
- [x] T006 Update `convex/services.ts`: add optional `blockId` arg to `create` and `update` mutations. Update `list` query to include blockId and block title (join with serviceBlocks). Update `getById` to return blockId.

**Checkpoint**: Schema deployed. All block CRUD operations and service assignment mutations work. Existing services unaffected (new fields are optional).

---

## Phase 2: User Story 2 - Admin Service Block Management (Priority: P2)

**Goal**: Admins can create, edit, reorder, and delete service blocks via the admin panel.

**Independent Test**: Navigate to `/admin/service-blocks`, create a block with title/subtitle/image, edit it, toggle active, reorder, delete. Verify list updates correctly.

### Implementation for User Story 2

- [x] T007 [P] [US2] Create `src/features/services/components/ServiceBlockList/ServiceBlockList.tsx` and `ServiceBlockList.module.css`: admin list component showing blocks with title, subtitle, service count, active status badge, and actions (edit, delete). Follow the same pattern as `ServiceList.tsx` (filter buttons, toggle active, soft-delete with confirmation, link to edit page).
- [x] T008 [P] [US2] Create `src/features/services/components/ServiceBlockForm/ServiceBlockForm.tsx` and `ServiceBlockForm.module.css`: create/edit form with fields for title (Input), subtitle (textarea), image (ImageUpload), and isActive (checkbox). Follow the same pattern as `ServiceForm.tsx`. On save, call `serviceBlocks.create` or `serviceBlocks.update`.
- [x] T009 [US2] Create admin route pages for service blocks: `src/app/(dashboard)/admin/service-blocks/page.tsx` (server component, renders ServiceBlockList), `src/app/(dashboard)/admin/service-blocks/new/page.tsx` (server component, renders ServiceBlockForm in create mode), `src/app/(dashboard)/admin/service-blocks/[id]/edit/page.tsx` and `EditServiceBlockContent.tsx` (server+client pattern, fetches block by id and renders ServiceBlockForm in edit mode).
- [x] T010 [US2] Add "Bloques" navigation item to `src/features/dashboard/components/Sidebar/Sidebar.tsx` in the `navItems` array, positioned directly after "Servicios". Use a grid/layout SVG icon. Link to `/admin/service-blocks`.

**Checkpoint**: Admin can fully manage service blocks (CRUD, reorder, toggle). New sidebar item visible and functional.

---

## Phase 3: User Story 3 - Assign and Remove Services from Blocks (Priority: P3)

**Goal**: Admins can assign services to blocks and manage the assignment from both the block edit page and the service edit form.

**Independent Test**: From block edit page, assign a service. From service edit form, change the block via dropdown. Verify assignments persist and services list shows block names.

### Implementation for User Story 3

- [x] T011 [US3] Add service assignment UI to the block edit page in `ServiceBlockForm.tsx` (or as a section in `EditServiceBlockContent.tsx`): show currently assigned services with remove buttons, and a dropdown/selector to add unassigned services. Call `serviceBlocks.assignService`, `serviceBlocks.removeService`, and `serviceBlocks.reorderServices` mutations.
- [x] T012 [US3] Add "Bloque" dropdown to `src/features/services/components/ServiceForm/ServiceForm.tsx`: query `serviceBlocks.listForSelect` to populate options. Include a "Sin bloque" option (empty/null value). On save, pass `blockId` to `services.create` or `services.update` mutations. Initialize from `initialData.blockId` in edit mode.
- [x] T013 [US3] Update `src/features/services/components/ServiceList/ServiceList.tsx` to display the block name for each service (from the updated `list` query). Show "Sin bloque" for services without a block assignment.
- [x] T014 [US3] Update `src/app/(dashboard)/admin/services/[id]/edit/EditServiceContent.tsx` to pass `blockId` from the fetched member data to `ServiceForm` via `initialData`.

**Checkpoint**: Full assignment round-trip works from both block edit page and service form. Services list shows block column.

---

## Phase 4: User Story 1 - Public Services Section Redesign (Priority: P1)

**Goal**: Visitors see services grouped by blocks with title, subtitle, and image on the public homepage.

**Independent Test**: Navigate to homepage services section. Verify blocks display in order with their title, subtitle, image, and grouped services. Verify empty/inactive blocks are hidden. Test responsive behavior.

### Implementation for User Story 1

- [x] T015 [US1] Redesign `src/components/public/ServicesSection/ServicesSection.tsx`: replace flat grid with block-based layout. Use `serviceBlocks.listPublic` query instead of `services.listPublic`. Render each block as a section with: block image, block title, block subtitle, and a grid of service cards (icon, title, description). Show skeleton loading state for blocks. Show empty state message when no blocks have services.
- [x] T016 [US1] Redesign `src/components/public/ServicesSection/ServicesSection.module.css`: new styles for block-based layout. Each block section has: block image (decorative, responsive), block title and subtitle typography, and a responsive service card grid within the block. Maintain existing CSS variable system, responsive breakpoints (768px, 1200px), and visual consistency (typography, colors, spacing, card hover effects).

**Checkpoint**: Public services section shows blocks with grouped services. Empty/inactive blocks are hidden. Responsive on all viewports.

---

## Phase 5: User Story 4 - Seed Data (Priority: P4)

**Goal**: Seed command creates the 4 predefined blocks and assigns existing services to them.

**Independent Test**: Run seed command on fresh database. Verify 4 blocks created with correct titles/subtitles. Verify each service is assigned to its correct block.

### Implementation for User Story 4

- [x] T017 [US4] Update `convex/seedContent.ts`: add SERVICE_BLOCKS constant array with the 4 predefined blocks (title, subtitle). In the `seedAll` mutation, after creating services: (1) create the 4 blocks with auto displayOrder, (2) patch each service with its `blockId` and `blockDisplayOrder` based on the defined assignments: Block 1 gets services 0,1,7 (Diseno, Certificacion, Sistemas ISO); Block 2 gets services 2,3 (Medicion, Informes); Block 3 gets services 4,5 (Capacitaciones, Planes); Block 4 gets service 6 (Comunicacion).

**Checkpoint**: Fresh seed produces 4 blocks with correct service assignments. Public site renders seeded blocks correctly.

---

## Phase 6: Polish & Verification

**Purpose**: Final validation across all changes.

- [x] T018 Run `npx tsc --noEmit` and `npm run build` to verify zero type errors and zero build errors.
- [x] T019 Run Playwright browser tests: verify public services section shows blocks, verify admin block CRUD works, verify service assignment from both block edit and service form, verify sidebar "Bloques" link works.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Foundational)**: No dependencies - start immediately
- **Phase 2 (US2 - Block Admin)**: Depends on Phase 1 (schema + backend must be deployed)
- **Phase 3 (US3 - Assignments)**: Depends on Phase 1 (backend) and Phase 2 (block admin pages exist for the assignment UI)
- **Phase 4 (US1 - Public Redesign)**: Depends on Phase 1 (listPublic query). Can run in parallel with Phase 2/3 if backend is ready.
- **Phase 5 (US4 - Seed)**: Depends on Phase 1 (schema). Can run in parallel with Phase 2/3/4.
- **Phase 6 (Polish)**: Depends on all previous phases.

### User Story Dependencies

- **US2 (Block Admin)**: Depends on foundational schema/backend. No dependency on other stories.
- **US3 (Assignments)**: Depends on US2 (needs block edit page for assignment UI).
- **US1 (Public Redesign)**: Depends on foundational backend (listPublic query). Independent of US2/US3 for implementation.
- **US4 (Seed)**: Depends on foundational schema. Independent of other stories.

### Parallel Opportunities

```text
# After Phase 1 completes, these can run in parallel:
T007, T008 [US2] Block list and form components
T015, T016 [US1] Public section redesign (if listPublic query is ready)
T017       [US4] Seed data update

# After Phase 2 completes:
T011 [US3] Block assignment UI
T012 [US3] Service form dropdown (can parallel with T011)
T013 [US3] Service list block column (can parallel with T011, T012)
```

---

## Implementation Strategy

### MVP First (US1 + US2)

1. Phase 1: Schema + backend (T001-T006)
2. Phase 2: Admin block CRUD (T007-T010) in parallel with Phase 4: Public redesign (T015-T016)
3. **STOP and VALIDATE**: Blocks manageable in admin, public section shows blocks
4. These deliver the core visible value

### Full Delivery

5. Phase 3: Service assignment (T011-T014)
6. Phase 5: Seed data (T017)
7. Phase 6: Build verification + browser tests (T018-T019)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Phase ordering (US2 before US1) is intentional: admin block management must exist before the public section can meaningfully display blocks. However, the public redesign code (T015-T016) can be developed in parallel once the `listPublic` query exists.
- The `services.listPublic` query is preserved for backward compatibility but the public component switches to `serviceBlocks.listPublic`.
- Commit after each phase or logical group.
