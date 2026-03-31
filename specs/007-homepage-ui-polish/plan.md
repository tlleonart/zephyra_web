# Implementation Plan: Homepage UI Polish

**Branch**: `007-homepage-ui-polish` | **Date**: 2026-03-31 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/007-homepage-ui-polish/spec.md`

## Summary

Three visual corrections to the public homepage: (1) balanced grid distribution for service cards within each block, (2) beige background (`#E5DFD5`) with rounded corners on team member cards, and (3) merging the separate Clients and Alliances sections into a single "Confían en nosotros" section. All changes are CSS/layout-level with one component consolidation — no data model or API changes required.

## Technical Context

**Language/Version**: TypeScript 5.7.2, Node.js 20.9+
**Primary Dependencies**: Next.js 15.1.0, React 19.0.0, Convex 1.17.4
**Storage**: Convex (no changes needed)
**Testing**: Visual verification across breakpoints
**Target Platform**: Web (desktop, tablet, mobile)
**Project Type**: Web application (Next.js frontend + Convex backend)
**Performance Goals**: No regressions in rendering; CSS-only changes where possible
**Constraints**: Must maintain existing hover effects, grayscale-to-color logo transitions, and responsive behavior
**Scale/Scope**: 3 components modified, 1 new component created, 1 component removed from homepage

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Calidad del Código | PASS | Follows existing component patterns, descriptive naming, no magic numbers |
| II. Estándares de Testing | PASS | Visual UI changes — manual verification across breakpoints per spec |
| III. Consistencia en UX | PASS | Uses existing design tokens (`--radius-lg`, `--spacing-*`), adds `#E5DFD5` as new brand color variable |
| IV. Documentación Exhaustiva | PASS | Spec and plan document all changes |
| V. Performance Óptima | PASS | Minimal JS logic added (column count calculation), no new network requests |

No violations. No Complexity Tracking entries needed.

## Project Structure

### Documentation (this feature)

```text
specs/007-homepage-ui-polish/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── spec.md              # Feature specification
├── quickstart.md        # Phase 1 output
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (files to modify)

```text
src/
├── components/public/
│   ├── ServicesSection/
│   │   ├── ServicesSection.tsx          # MODIFY: add column-count logic
│   │   └── ServicesSection.module.css   # MODIFY: replace auto-fit with dynamic columns
│   ├── TeamSection/
│   │   └── TeamSection.module.css       # MODIFY: add background + border-radius to .card
│   ├── TrustSection/                    # NEW: merged clients + alliances
│   │   ├── TrustSection.tsx
│   │   ├── TrustSection.module.css
│   │   └── index.ts
│   ├── ClientsSection/                  # NO CHANGES (kept for potential standalone use)
│   ├── AlliancesSection/                # NO CHANGES (kept for potential standalone use)
│   └── HomePageContent.tsx              # MODIFY: replace ClientsSection + AlliancesSection with TrustSection
└── styles/
    └── variables.css                    # MODIFY: add --color-brand-secondary variable
```

**Structure Decision**: Web application structure. All changes are in `src/components/public/` (frontend only). No backend changes needed. The existing ClientsSection and AlliancesSection components are preserved but removed from the homepage composition — replaced by the new TrustSection.

## Implementation Details

### Change 1: Balanced Service Grid (FR-001, FR-002, FR-003)

**Problem**: Current CSS `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` creates unbalanced rows (e.g., 4 items → 3+1 instead of 2+2).

**Solution**: Calculate the optimal number of columns based on item count, then apply explicit `grid-template-columns: repeat(N, 1fr)`. The logic:

- Desktop (max 3 columns):
  - 1 item → 1 col
  - 2 items → 2 cols
  - 3 items → 3 cols
  - 4 items → 2 cols (2+2)
  - 5 items → 3 cols (3+2)
  - 6 items → 3 cols (3+3)
  - 7+ items → 3 cols (balanced rows)
- Tablet: max 2 columns, same balancing principle
- Mobile: always 1 column (no change)

**Approach**: Use inline `style` on the grid container to set `grid-template-columns` dynamically based on `block.services.length`. The CSS media queries override to 2 cols (tablet) and 1 col (mobile).

**Column count function**:
```
getDesktopColumns(count):
  if count <= 3: return count
  if count === 4: return 2
  return 3
```

### Change 2: Team Card Background (FR-004)

**Problem**: Team cards currently have no background or border — just text-centered content.

**Solution**: Add to `.card` in TeamSection.module.css:
- `background-color: #E5DFD5`
- `border-radius: var(--radius-lg)` (12px)
- No border line

Also add `--color-brand-secondary: #E5DFD5` to variables.css for reuse.

### Change 3: Unified Trust Section (FR-005–FR-008)

**Problem**: ClientsSection and AlliancesSection are two separate, nearly identical components with different titles.

**Solution**: Create a new `TrustSection` component that:
1. Fetches both `api.clients.listPublic` and `api.alliances.listPublic`
2. Returns null if both are empty
3. Renders a single section with:
   - Title: "Confían en nosotros"
   - Subtitle: "Trabajamos con organizaciones comprometidas con la sostenibilidad"
   - Clients row (if clients exist)
   - Alliances row (if alliances exist)
4. Preserves all existing logo rendering logic (grayscale, hover, links)
5. Uses `id="confianza"` as the unified anchor

**Component reuse**: Extract a shared `LogoRow` internal component to avoid duplicating the logo rendering logic between clients and alliances rows.
