# Research: Tester Fixes

**Date**: 2026-03-13
**Feature**: 002-tester-fixes

## Research Findings

### 1. Navbar "Equipo" Link Implementation

**Decision**: Add `{ href: '/#equipo', label: 'Equipo' }` to the `navLinks` array in `Navbar.tsx`, positioned between "Servicios" and "Proyectos".

**Rationale**: The `TeamSection` component already renders with `<section id="equipo">`, so the anchor target exists. The pattern `/#equipo` is identical to the existing `/#servicios` pattern. No scroll behavior code needed - the browser handles hash navigation natively.

**Alternatives considered**:
- Custom smooth scroll JS: Rejected - browser handles `#hash` navigation; over-engineering for this use case.
- Separate `/equipo` route: Rejected - the team section is part of the homepage, not a standalone page.

**Key finding**: The `id="equipo"` attribute already exists on the `<section>` element in `TeamSection.tsx` (line 16). No HTML changes needed for the anchor target.

### 2. Team Photo Position Editor

**Decision**: Use CSS `object-position` with two percentage values (X: horizontal, Y: vertical) stored as optional numbers in the Convex schema, defaulting to 50 (center).

**Rationale**:
- `object-position` is the native CSS solution for positioning images within `object-fit: cover` containers
- Percentage values (0-100) are intuitive for range slider controls
- Values map directly to CSS: `object-position: {X}% {Y}%`
- Default 50% 50% preserves current center-crop behavior for existing members

**UI approach**: Two range sliders (horizontal position, vertical position) placed below the ImageUpload component in the TeamForm, with a 120px circular preview that mirrors the public site rendering. The preview uses the same CSS as the public TeamSection (120px circle, overflow: hidden, object-fit: cover).

**Alternatives considered**:
- Drag-to-reposition on the image: Rejected - significantly more complex (mouse/touch event handling, coordinate math) with marginal UX benefit over sliders + preview.
- Single "focal point" picker on the full image: Rejected - requires rendering the full image with click coordinates, more complex than sliders.
- Only vertical position: Rejected - some photos may need horizontal adjustment too (e.g., group photos or off-center portraits).

**Schema impact**:
- Add `imagePositionX: v.optional(v.number())` to teamMembers table
- Add `imagePositionY: v.optional(v.number())` to teamMembers table
- Both optional to maintain backward compatibility with existing records
- No index changes needed (positions are not queried/filtered)

### 3. Terminology Replacement (sustentabilidad → sostenibilidad)

**Decision**: Direct text replacement in all source files. Total: 11 occurrences across 2 files.

**Rationale**: Simple find-and-replace with no functional impact. All occurrences are in string literals (seed content and static image mappings).

**Files affected**:
1. `convex/seedContent.ts` - 10 occurrences:
   - "sustentabilidad" → "sostenibilidad" (8 occurrences in service/project titles and descriptions)
   - "sustentable" → "sostenible" (1 occurrence: "Comunicación sustentable" → "Comunicación sostenible")
   - Project slug: "programa-sustentabilidad-corporativa" → "programa-sostenibilidad-corporativa"
2. `src/lib/staticImages.ts` - 1 occurrence:
   - Slug key: 'programa-sustentabilidad-corporativa' → 'programa-sostenibilidad-corporativa'

**Important note**: The image file path `/images/project-sustentabilidad.jpg` in the staticImages mapping should also be renamed to `/images/project-sostenibilidad.jpg` if the physical file exists in the `public/` directory. If the file doesn't exist (images served from Convex storage), only the mapping key needs updating.

**Out of scope**: Live database content already created by admins. The seed data changes only affect fresh database seeding.
