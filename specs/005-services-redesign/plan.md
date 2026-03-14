# Implementation Plan: Services Section Redesign

**Branch**: `005-services-redesign` | **Date**: 2026-03-14 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/005-services-redesign/spec.md`

## Summary

Redesign the public ServicesSection component for a more polished, professional appearance. Key changes: (1) Make block header images significantly larger and more prominent, (2) add alternating left/right layout for consecutive blocks to create visual rhythm, (3) make service cards more compact with improved hover/focus effects, (4) add keyboard focus styles for accessibility. All changes are CSS/layout only — no backend or data model modifications. Only 2 files are modified: `ServicesSection.tsx` (minor JSX changes for alternating class and focus) and `ServicesSection.module.css` (major style overhaul).

## Technical Context

**Language/Version**: TypeScript 5.7.2, Node.js 20.9+
**Primary Dependencies**: Next.js 15.1.0, React 19.0.0, Convex 1.17.4
**Storage**: Convex (no changes needed)
**Testing**: Manual verification + `npx tsc --noEmit` + `npm run build`
**Target Platform**: Web (responsive)
**Project Type**: Web application (Next.js App Router + Convex BaaS)
**Performance Goals**: Zero layout shift, no new JS dependencies
**Constraints**: CSS-only interactions. No animation libraries. Existing design system variables.
**Scale/Scope**: 2 files modified. Pure visual redesign.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Calidad del Código | PASS | Follows existing component patterns. No magic numbers — uses CSS variables. |
| II. Estándares de Testing | PASS | Manual verification + type check + build. No new business logic. |
| III. Consistencia en UX | PASS | Uses existing design system tokens. Adds hover+focus states. Responsive breakpoints maintained. |
| IV. Documentación Exhaustiva | PASS | Spec, plan, research, quickstart all generated. |
| V. Performance Óptima | PASS | No new dependencies. CSS-only transitions. Larger images use existing Next.js Image optimization. |

All gates pass. No violations to justify.

## Project Structure

### Documentation (this feature)

```text
specs/005-services-redesign/
├── spec.md
├── plan.md
├── research.md
├── quickstart.md
├── contracts/
│   └── no-backend-changes.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (files to modify)

```text
src/
├── components/
│   └── public/
│       └── ServicesSection/
│           ├── ServicesSection.tsx        # MODIFY: add alternating class, tabIndex on cards
│           └── ServicesSection.module.css  # MODIFY: major style overhaul
```

**Structure Decision**: No new files needed. This feature modifies 2 existing files within the established project structure.
