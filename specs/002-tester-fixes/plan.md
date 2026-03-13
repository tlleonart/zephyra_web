# Implementation Plan: Tester Fixes - Navbar, Team Photos & Terminology

**Branch**: `002-tester-fixes` | **Date**: 2026-03-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-tester-fixes/spec.md`

## Summary

Three bug fixes identified by testers: (1) add "Equipo" anchor link to the navbar, (2) add photo position editor with circular preview to the admin team member form, and (3) replace all "sustentabilidad"/"sustentable" with "sostenibilidad"/"sostenible" in the codebase.

## Technical Context

**Language/Version**: TypeScript 5.7.2, Node.js 20.9+
**Primary Dependencies**: Next.js 15.1.0, React 19.0.0, Convex 1.17.4
**Storage**: Convex (database + file storage)
**Testing**: Vitest 2.1.8, Playwright 1.49.1
**Target Platform**: Web application (SSR + client-side)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Standard web app expectations; position editor preview must update in real-time (<16ms frame budget)
**Constraints**: Server components preferred where possible; Convex hooks require client components
**Scale/Scope**: Small admin dashboard, ~7 team members max typical usage

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Calidad del Código | PASS | Changes follow existing patterns; no magic numbers (position uses 0-100 range); no code duplication |
| II. Estándares de Testing | PASS | Playwright tests planned for all 3 fixes; manual verification of seed data changes |
| III. Consistencia en UX | PASS | Photo position editor follows existing admin form patterns; range sliders with circular preview match the design system |
| IV. Documentación Exhaustiva | PASS | Plan artifacts document all changes; quickstart updated |
| V. Performance Óptima | PASS | Real-time preview uses CSS `object-position` (no JS computation); no new queries or N+1 risks |

No violations. No Complexity Tracking entries needed.

## Project Structure

### Documentation (this feature)

```text
specs/002-tester-fixes/
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
│       ├── Navbar/Navbar.tsx              # Add "Equipo" link
│       └── TeamSection/
│           ├── TeamSection.tsx            # Apply object-position from data
│           └── TeamSection.module.css     # No changes needed (object-position inline)
├── features/
│   └── team/
│       └── components/
│           └── TeamForm/TeamForm.tsx      # Add position editor with preview
├── lib/
│   └── staticImages.ts                   # Rename slug mapping
└── providers/                            # No changes

convex/
├── schema.ts                             # Add imagePositionX/Y fields
├── teamMembers.ts                        # Update create/update/queries
└── seedContent.ts                        # Replace sustentabilidad → sostenibilidad
```

**Structure Decision**: All changes fit within the existing project structure. No new directories needed. The photo position editor is added inline to the existing TeamForm component.
