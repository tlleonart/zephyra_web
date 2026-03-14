# Tasks: Services Section Redesign

**Input**: Design documents from `/specs/005-services-redesign/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, contracts/no-backend-changes.md, quickstart.md

**Tests**: Not explicitly requested — manual verification via quickstart.md.

**Organization**: Tasks grouped by user story. Only 2 source files modified: `ServicesSection.tsx` and `ServicesSection.module.css`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

---

## Phase 1: Setup

**Purpose**: No project setup needed — this modifies existing files only. Verify starting state.

- [x] T001 Verify existing component renders correctly by running `npx tsc --noEmit` and checking `src/components/public/ServicesSection/ServicesSection.tsx` compiles

---

## Phase 2: User Story 1 - Visually Engaging Block Layout (Priority: P1)

**Goal**: Make block headers visually prominent with large images and alternating left/right layout for visual rhythm.

**Independent Test**: Navigate to localhost:3000, scroll to services section. Each block has a large image (~45% width). Consecutive blocks alternate image/text direction.

### Implementation for User Story 1

- [x] T002 [US1] Overhaul block header styles in `src/components/public/ServicesSection/ServicesSection.module.css`: increase `.blockImageWrapper` from 200×160px to flex-based ~45% width with 280px min-height, update `.blockHeader` gap and alignment
- [x] T003 [US1] Add alternating layout CSS in `src/components/public/ServicesSection/ServicesSection.module.css`: add `.block:nth-child(even) .blockHeader { flex-direction: row-reverse }` rule
- [x] T004 [US1] Add image placeholder styles in `src/components/public/ServicesSection/ServicesSection.module.css`: create `.blockImagePlaceholder` class with gradient background using brand colors
- [x] T005 [US1] Update `src/components/public/ServicesSection/ServicesSection.tsx`: ensure `.blockImageWrapper` always renders (even without image), show placeholder gradient when no `imageUrl`, update Next.js Image `sizes` attribute for larger rendering

**Checkpoint**: Block headers should now be large and alternating. Cards are unchanged.

---

## Phase 3: User Story 2 - Compact and Interactive Service Cards (Priority: P2)

**Goal**: Make service cards more compact with left-aligned layout, inline icons, and enhanced hover/focus effects.

**Independent Test**: Cards appear compact with left-aligned text and inline icon+title. Hover shows border accent + background tint. Cards in same row have consistent height.

### Implementation for User Story 2

- [x] T006 [US2] Redesign card layout in `src/components/public/ServicesSection/ServicesSection.module.css`: reduce padding to `var(--spacing-md)`, switch to left-aligned text, make `.iconWrapper` 40px inline with title using flexbox
- [x] T007 [US2] Enhance hover effect in `src/components/public/ServicesSection/ServicesSection.module.css`: add left border accent (3px solid brand), background tint on hover, refine shadow, keep translateY(-2px) subtle
- [x] T008 [US2] Add keyboard focus styles in `src/components/public/ServicesSection/ServicesSection.module.css`: add `.card:focus-visible` matching hover effect, add focus outline for accessibility
- [x] T009 [US2] Update card JSX in `src/components/public/ServicesSection/ServicesSection.tsx`: add `tabIndex={0}` to each card div, restructure card inner layout for inline icon+title pattern

**Checkpoint**: Cards should be compact, left-aligned, with hover and focus effects working.

---

## Phase 4: User Story 3 - Responsive and Accessible Design (Priority: P3)

**Goal**: Ensure the redesigned section adapts gracefully to mobile, tablet, and desktop with proper breakpoints.

**Independent Test**: Resize browser from 1440px down to 320px. Layout adapts at each breakpoint without overflow. Alternating disabled on mobile/tablet. Cards switch to 2-col then 1-col.

### Implementation for User Story 3

- [x] T010 [US3] Update mobile breakpoint (below 768px) in `src/components/public/ServicesSection/ServicesSection.module.css`: stack block header vertically, full-width image, single-column cards, disable alternating
- [x] T011 [US3] Add tablet breakpoint (768px-1023px) in `src/components/public/ServicesSection/ServicesSection.module.css`: stack block header, 2-column card grid, disable alternating
- [x] T012 [US3] Verify no horizontal overflow at 320px, 768px, 1024px, 1440px viewport widths — fix any overflow issues in `src/components/public/ServicesSection/ServicesSection.module.css`

**Checkpoint**: Section should be fully responsive at all breakpoints.

---

## Phase 5: Polish & Validation

**Purpose**: Final verification and build check.

- [x] T013 Run `npx tsc --noEmit` to verify no type errors in `src/components/public/ServicesSection/ServicesSection.tsx`
- [x] T014 Run `npm run build` to verify production build succeeds
- [x] T015 Run quickstart.md manual verification checklist against localhost:3000

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phase 2 (US1)**: Depends on Phase 1. T002→T003→T004 are CSS-only and sequential (same file). T005 (TSX) can run after T004.
- **Phase 3 (US2)**: Depends on Phase 2. T006→T007→T008 are CSS-only and sequential (same file). T009 (TSX) can run after T008.
- **Phase 4 (US3)**: Depends on Phase 3. T010→T011→T012 are sequential (same file, breakpoint ordering).
- **Phase 5 (Polish)**: Depends on all previous phases. T013→T014→T015 sequential.

### Within Each User Story

- CSS changes before JSX changes (layout foundation first)
- All tasks within a phase affect the same 2 files, so limited parallelism

### Parallel Opportunities

- Within US1: T002-T004 (CSS) can technically run in parallel with T005 (TSX) if CSS is drafted first
- Within US2: T006-T008 (CSS) can technically run in parallel with T009 (TSX) if CSS is drafted first
- US1 and US2 affect the same files, so they should be sequential

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup verification
2. Complete Phase 2: US1 — Large headers + alternating layout
3. **STOP and VALIDATE**: Visual check that headers are prominent and alternating
4. This alone is a major visual improvement

### Incremental Delivery

1. US1: Block headers → Major visual impact (biggest change)
2. US2: Compact cards → Professional polish
3. US3: Responsive → Production-ready
4. Polish: Build verification → Ship confidence

---

## Notes

- Only 2 source files modified: `ServicesSection.tsx` and `ServicesSection.module.css`
- No backend changes — contract verified in `contracts/no-backend-changes.md`
- CSS-only interactions — no animation libraries
- Uses existing design system CSS variables throughout
- Total: 15 tasks across 5 phases
