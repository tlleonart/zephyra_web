# Implementation Plan: Team Editor Fixes

**Branch**: `004-team-editor-fixes` | **Date**: 2026-03-14 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-team-editor-fixes/spec.md`

## Summary

Fix two issues in team member management: (1) Add reorder controls to the admin team list so admins can control display order on the public site, and (2) verify and refine the existing image position editor to ensure the admin circular preview exactly matches the public site rendering. The backend already has all required mutations and schema fields; changes are UI-only.

## Technical Context

**Language/Version**: TypeScript 5.7.2, Node.js 20.9+
**Primary Dependencies**: Next.js 15.1.0, React 19.0.0, Convex 1.17.4
**Storage**: Convex (database + file storage)
**Testing**: Manual verification + `npx tsc --noEmit` + `npm run build`
**Target Platform**: Web (responsive)
**Project Type**: Web application (Next.js App Router + Convex BaaS)
**Performance Goals**: Reorder reflects on public site within 3 seconds (real-time via Convex)
**Constraints**: No new dependencies. Existing reorder mutation and position fields already work.
**Scale/Scope**: Under 20 team members. 2-3 files modified.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Calidad del Código | PASS | Follows existing patterns (ServiceList reorder pattern). No magic numbers. |
| II. Estándares de Testing | PASS | Manual verification + type check + build. No new business logic requiring unit tests. |
| III. Consistencia en UX | PASS | Reorder buttons follow admin panel conventions. Preview matches public rendering. |
| IV. Documentación Exhaustiva | PASS | Spec, plan, research, quickstart all generated. |
| V. Performance Óptima | PASS | Uses existing Convex indexes. No new queries. Real-time updates via existing subscriptions. |

All gates pass. No violations to justify.

## Project Structure

### Documentation (this feature)

```text
specs/004-team-editor-fixes/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── convex-changes.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (files to modify)

```text
src/
├── features/
│   └── team/
│       └── components/
│           ├── TeamList/
│           │   ├── TeamList.tsx        # ADD reorder buttons (up/down arrows)
│           │   └── TeamList.module.css  # ADD styles for reorder buttons
│           └── TeamForm/
│               ├── TeamForm.tsx        # VERIFY position editor matches public
│               └── TeamForm.module.css  # VERIFY preview styles match public
├── components/
│   └── public/
│       └── TeamSection/
│           ├── TeamSection.tsx         # VERIFY order + position rendering
│           └── TeamSection.module.css  # REFERENCE for preview matching
```

**Structure Decision**: No new files needed. This feature modifies 2-3 existing files within the established project structure.
