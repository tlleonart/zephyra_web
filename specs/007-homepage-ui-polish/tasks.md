# Tasks: Homepage UI Polish

**Input**: Design documents from `/specs/007-homepage-ui-polish/`
**Prerequisites**: plan.md (required), spec.md (required), research.md

**Tests**: Not requested — visual verification only.

**Organization**: Tasks are grouped by user story. All three stories are independent and can be implemented in parallel.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Add brand secondary color as a design token for reuse

- [x] T001 Add `--color-brand-secondary: #E5DFD5` CSS variable to `src/styles/variables.css` under the Brand Colors section

**Checkpoint**: Design token available for use in components

---

## Phase 2: User Story 1 — Distribución armónica de servicios (Priority: P1) 🎯 MVP

**Goal**: Service cards within each block distribute evenly across rows (e.g., 4 items = 2+2 instead of 3+1). All cards fill the container width.

**Independent Test**: Navigate to the services section on the homepage. For each block, verify cards are balanced: 4→2+2, 5→3+2, 6→3+3, 3→3. Check tablet (2 cols balanced) and mobile (1 col). No orphan single card when count > 3.

### Implementation for User Story 1

- [x] T002 [US1] Add a `getBalancedColumns(count: number): number` helper function in `src/components/public/ServicesSection/ServicesSection.tsx` that returns the optimal column count for desktop: count ≤ 3 → count, count === 4 → 2, count ≥ 5 → 3
- [x] T003 [US1] Apply the column count as inline `style={{ gridTemplateColumns: repeat(N, 1fr) }}` on the `.servicesGrid` container in `src/components/public/ServicesSection/ServicesSection.tsx`, passing `block.services.length` to the helper
- [x] T004 [US1] Update `.servicesGrid` in `src/components/public/ServicesSection/ServicesSection.module.css`: remove the `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` rule (desktop will now use inline styles). Keep the tablet media query at `repeat(2, 1fr)` and mobile at `1fr`

**Checkpoint**: Services grid is balanced in all breakpoints. Verify with blocks of 3, 4, 5, and 6 services.

---

## Phase 3: User Story 2 — Cards de equipo con recuadro secundario (Priority: P2)

**Goal**: Each team member card has a warm beige (`#E5DFD5`) background with rounded corners, no border line.

**Independent Test**: Navigate to the team section. Each card should have a visible beige background with rounded corners. Check on desktop, tablet, and mobile — no clipping or deformation.

### Implementation for User Story 2

- [x] T005 [US2] Add `background-color: var(--color-brand-secondary)` and `border-radius: var(--radius-lg)` to the `.card` class in `src/components/public/TeamSection/TeamSection.module.css`

**Checkpoint**: Team cards display with beige background and rounded corners across all breakpoints.

---

## Phase 4: User Story 3 — Unificación de Clientes y Alianzas (Priority: P2)

**Goal**: Replace the separate Clients and Alliances sections with a single "Confían en nosotros" section showing client logos on top and alliance logos below.

**Independent Test**: Navigate to the homepage. The two separate sections should be replaced by one section with title "Confían en nosotros", subtitle "Trabajamos con organizaciones comprometidas con la sostenibilidad", clients on the upper row, alliances on the lower row. Hover effects (grayscale → color) must still work.

### Implementation for User Story 3

- [x] T006 [P] [US3] Create `src/components/public/TrustSection/TrustSection.module.css` with styles from the existing ClientsSection.module.css: section padding, container, header (title + subtitle), logo grid (flex wrap centered), logo containers (150×80px desktop, 120×60px mobile), grayscale/hover effects, and a `.row` class for separating the clients and alliances rows with appropriate spacing
- [x] T007 [P] [US3] Create `src/components/public/TrustSection/TrustSection.tsx` that: (1) fetches both `api.clients.listPublic` and `api.alliances.listPublic` via useQuery, (2) returns null if both are empty/undefined after loading, (3) renders section with `id="confianza"`, title "Confían en nosotros", subtitle "Trabajamos con organizaciones comprometidas con la sostenibilidad", (4) renders clients row if clients exist, alliances row if alliances exist, (5) uses `getClientLogo`/`getAllianceLogo` helpers for static image fallback, (6) preserves link behavior (a with target _blank for items with websiteUrl)
- [x] T008 [US3] Create barrel export `src/components/public/TrustSection/index.ts` exporting TrustSection component
- [x] T009 [US3] Update `src/components/public/HomePageContent.tsx`: replace `ClientsSection` and `AlliancesSection` imports with `TrustSection` import, replace both component usages with single `<TrustSection />`

**Checkpoint**: Homepage shows unified trust section. Clients above, alliances below. Hover effects work. Section hidden when no data.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final visual verification and cleanup

- [ ] T010 Run visual verification per `specs/007-homepage-ui-polish/quickstart.md`: check all three changes across desktop, tablet (768px–1023px), and mobile (<768px) breakpoints
- [x] T011 Verify no lint errors with `npm run lint`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **US1 (Phase 2)**: No dependency on Setup (doesn't use the CSS variable) — can start immediately
- **US2 (Phase 3)**: Depends on T001 (needs `--color-brand-secondary` variable)
- **US3 (Phase 4)**: No dependency on Setup — can start immediately
- **Polish (Phase 5)**: Depends on all user stories being complete

### User Story Dependencies

- **US1**: Fully independent. Files: ServicesSection.tsx, ServicesSection.module.css
- **US2**: Depends on T001 (CSS variable). Files: TeamSection.module.css
- **US3**: Fully independent. Files: new TrustSection/, HomePageContent.tsx

**No cross-story dependencies.** All three user stories touch completely different files and can be implemented in parallel.

### Parallel Opportunities

- T001 + T002 + T006 + T007 can all run in parallel (different files)
- T006 and T007 (within US3) can run in parallel (CSS and TSX are separate files)
- All three user stories can be developed concurrently after T001 completes

---

## Parallel Example: All Stories at Once

```bash
# After T001 (CSS variable), launch all stories in parallel:

# US1 (services grid):
Task T002: "Add getBalancedColumns helper in ServicesSection.tsx"
Task T003: "Apply inline grid style in ServicesSection.tsx" (after T002)
Task T004: "Update ServicesSection.module.css grid rules" (after T003)

# US2 (team cards):
Task T005: "Add background and border-radius to TeamSection.module.css"

# US3 (trust section) — T006 and T007 in parallel:
Task T006: "Create TrustSection.module.css"
Task T007: "Create TrustSection.tsx"
Task T008: "Create TrustSection/index.ts" (after T007)
Task T009: "Update HomePageContent.tsx" (after T008)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete T001: Add CSS variable
2. Complete T002–T004: Balanced service grid
3. **STOP and VALIDATE**: Test service distribution independently
4. Deploy if ready — most visible improvement

### Incremental Delivery

1. T001 → CSS variable ready
2. T002–T004 → Service grid balanced → Validate (MVP!)
3. T005 → Team cards styled → Validate
4. T006–T009 → Trust section unified → Validate
5. T010–T011 → Cross-browser check + lint → Deploy

---

## Notes

- All changes are frontend-only — no backend/API/database modifications
- No test tasks included (not requested; visual verification only)
- Original ClientsSection and AlliancesSection files are preserved, just removed from HomePageContent
- Commit after each user story checkpoint for clean git history
