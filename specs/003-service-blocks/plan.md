# Implementation Plan: Service Blocks - Grouped Services with Images

**Branch**: `003-service-blocks` | **Date**: 2026-03-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/003-service-blocks/spec.md`

## Summary

Introduce a "Service Block" entity that groups existing services into thematic categories, each with a title, subtitle, and image. The public services section is redesigned to display blocks instead of a flat grid. Admins manage blocks via a new admin section and can assign services to blocks from both the block detail view and the service edit form.

## Technical Context

**Language/Version**: TypeScript 5.7.2, Node.js 20.9+
**Primary Dependencies**: Next.js 15.1.0, React 19.0.0, Convex 1.17.4
**Storage**: Convex (database + file storage)
**Testing**: Vitest 2.1.8, Playwright 1.49.1
**Target Platform**: Web application (SSR + client-side)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Standard web app; block query must resolve in a single round-trip (no N+1)
**Constraints**: Server components preferred where possible; Convex hooks require client components
**Scale/Scope**: ~4 blocks, ~8 services. Small admin dashboard.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Calidad del Codigo | PASS | Follows existing patterns (ServiceBlock mirrors Service entity structure). No magic numbers. Block relationship via foreign key on services table. |
| II. Estandares de Testing | PASS | Playwright browser tests planned for public section and admin CRUD. Build verification included. |
| III. Consistencia en UX | PASS | Admin block management follows identical patterns to existing admin sections (list, create, edit). Public redesign maintains CSS variable system, responsive grid, and typography. |
| IV. Documentacion Exhaustiva | PASS | Plan artifacts document all changes. Quickstart provides step-by-step verification. |
| V. Performance Optima | PASS | Public query fetches blocks with services in a single query (no N+1). Block images use same lazy-loading pattern as team/project images. |

No violations. No Complexity Tracking entries needed.

## Project Structure

### Documentation (this feature)

```text
specs/003-service-blocks/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
│   └── convex-schema.md # Schema changes
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── components/
│   └── public/
│       └── ServicesSection/
│           ├── ServicesSection.tsx          # Redesign: render blocks with grouped services
│           └── ServicesSection.module.css   # New block-based layout styles
├── features/
│   └── services/
│       └── components/
│           ├── ServiceForm/ServiceForm.tsx  # Add block dropdown selector
│           ├── ServiceList/ServiceList.tsx  # Add block column indicator
│           ├── ServiceBlockForm/           # NEW: block create/edit form
│           │   ├── ServiceBlockForm.tsx
│           │   └── ServiceBlockForm.module.css
│           └── ServiceBlockList/           # NEW: block admin list
│               ├── ServiceBlockList.tsx
│               └── ServiceBlockList.module.css
├── app/
│   └── (dashboard)/
│       └── admin/
│           └── service-blocks/             # NEW: admin pages for blocks
│               ├── page.tsx                # Block list page
│               ├── new/page.tsx            # Create block page
│               └── [id]/edit/
│                   ├── page.tsx            # Edit block page
│                   └── EditServiceBlockContent.tsx
└── lib/
    └── staticImages.ts                     # No changes needed

convex/
├── schema.ts                               # Add serviceBlocks table, modify services table
├── serviceBlocks.ts                        # NEW: block queries and mutations
├── services.ts                             # Add blockId handling to mutations/queries
└── seedContent.ts                          # Add block seed data with service assignments
```

**Structure Decision**: All changes follow existing project patterns. New admin pages mirror the existing services/ admin structure (list, new, edit). New feature components follow the ServiceForm/ServiceList naming convention. The Convex backend adds a new file for block operations and modifies the existing services file for block association.
