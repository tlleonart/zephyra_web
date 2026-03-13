# Feature Specification: Tester Fixes - Navbar, Team Photos & Terminology

**Feature Branch**: `002-tester-fixes`
**Created**: 2026-03-13
**Status**: Draft
**Input**: User description: "The Zephyra's team testers detected a few errors that we need to solve. 1. At the navbar we need to add a button which says 'Equipo', that should scroll to the 'Equipo' section. 2. The team photographs look cropped at the frontend, so we need to add a way to edit the position with a preview at the admin section, so the admin can adapt the photography to the area. 3. The word 'sustentabilidad' must be changed for 'sostenibilidad' EVERYWHERE."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Add "Equipo" Link to Navbar (Priority: P1)

A visitor on the Zephyra website wants to quickly navigate to the team section. Currently the navbar has links for Inicio, Servicios, Proyectos, Blog, and Contacto. The visitor expects to find an "Equipo" link that scrolls smoothly to the team section on the homepage, following the same pattern as the existing "Servicios" link (`/#servicios`).

**Why this priority**: Navigation is the most visible and frequently used UI element. A missing link directly impacts discoverability of the team section, which is key for trust and credibility.

**Independent Test**: Can be fully tested by clicking the "Equipo" link in the navbar from any page and verifying it navigates to the homepage and scrolls to the team section.

**Acceptance Scenarios**:

1. **Given** a visitor is on the homepage, **When** they click the "Equipo" link in the navbar, **Then** the page scrolls smoothly to the team section.
2. **Given** a visitor is on any other page (e.g., /blog, /contacto), **When** they click the "Equipo" link, **Then** they are navigated to the homepage and the page scrolls to the team section.
3. **Given** a visitor is on the homepage on a mobile device, **When** they open the hamburger menu and tap "Equipo", **Then** the menu closes and the page scrolls to the team section.

---

### User Story 2 - Team Photo Position Editor in Admin (Priority: P2)

An admin managing team member profiles notices that uploaded photographs appear poorly cropped in the circular 120x120px display on the public site. The admin needs a way to adjust the focal point (position) of each team member's photo so that the most important part of the image (typically the face) is centered within the circular crop area.

The admin should see a visual preview of how the photo will look in the circular frame while adjusting the position, so they can make informed adjustments before saving.

**Why this priority**: Poor photo cropping directly affects the professional appearance of the site. This requires both backend schema changes and a new UI component, making it the most complex of the three fixes.

**Independent Test**: Can be tested by uploading a team member photo in the admin panel, adjusting the position using the editor, saving, and verifying the public site displays the photo with the correct positioning.

**Acceptance Scenarios**:

1. **Given** an admin is editing a team member's profile, **When** they upload or have an existing photo, **Then** they see a circular preview showing how the photo will appear on the public site.
2. **Given** an admin sees the photo preview, **When** they adjust the vertical and horizontal position controls, **Then** the preview updates in real-time to reflect the new crop position.
3. **Given** an admin has adjusted the photo position, **When** they save the team member profile, **Then** the position values are persisted and the public site reflects the new positioning.
4. **Given** an admin uploads a new photo for a team member who already had a positioned photo, **When** the new photo is uploaded, **Then** the position resets to center (default 50% 50%).
5. **Given** a team member has no custom position set, **When** the photo is displayed on the public site, **Then** it defaults to center positioning (current behavior preserved).

---

### User Story 3 - Replace "sustentabilidad" with "sostenibilidad" (Priority: P1)

Zephyra uses "sostenibilidad" as their preferred terminology. Some content in the codebase and seed data still uses the variant "sustentabilidad" (and "sustentable" instead of "sostenible"). All instances must be updated to maintain consistent brand terminology across the platform.

**Why this priority**: Brand consistency in terminology is fundamental. This is a straightforward text replacement with no risk of breaking functionality, making it quick to implement alongside the navbar fix.

**Independent Test**: Can be tested by searching the entire codebase for "sustentabilidad" and "sustentable" and verifying zero occurrences remain.

**Acceptance Scenarios**:

1. **Given** a developer searches the codebase for "sustentabilidad" (case-insensitive), **When** the search completes, **Then** zero results are returned.
2. **Given** a developer searches the codebase for "sustentable" (case-insensitive), **When** the search completes, **Then** zero results are returned.
3. **Given** the seed content includes service and project descriptions, **When** those descriptions reference sustainability concepts, **Then** they use "sostenibilidad" and "sostenible" respectively.

---

### Edge Cases

- What happens when the team section has no visible members? The "Equipo" navbar link should still scroll to the section (which would show an empty state).
- What happens when a team member photo is very small or has unusual aspect ratio? The position editor should still allow adjustment, and the circular preview should reflect the actual rendering.
- What happens when an admin adjusts photo position but cancels without saving? The position should revert to the previously saved value.
- What happens when the "sustentabilidad" word appears in user-generated content stored in the database (not seed data)? Only codebase and seed data are in scope; live database content entered by admins is out of scope for this fix.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The navbar MUST include an "Equipo" link positioned between "Servicios" and "Proyectos" in the navigation order.
- **FR-002**: The "Equipo" link MUST navigate to the homepage team section using the anchor pattern `/#equipo`, consistent with the existing "Servicios" (`/#servicios`) pattern.
- **FR-003**: The team section on the homepage MUST have an HTML anchor (`id="equipo"`) to support scroll-to navigation.
- **FR-004**: The "Equipo" link MUST work from any page on the site, navigating to the homepage first if needed.
- **FR-005**: The team member admin form MUST include a photo position editor when a photo is uploaded.
- **FR-006**: The photo position editor MUST provide controls for adjusting horizontal (left-right) and vertical (top-bottom) positioning of the image within the circular crop area.
- **FR-007**: The photo position editor MUST display a real-time circular preview (matching the 120px public site rendering) showing how the photo will appear with the current position settings.
- **FR-008**: The photo position values MUST be persisted when the admin saves the team member profile.
- **FR-009**: The public team section MUST apply the saved photo position when rendering each team member's photo.
- **FR-010**: When no custom position is set, photos MUST default to center positioning (50% horizontal, 50% vertical).
- **FR-011**: When a new photo is uploaded replacing an existing one, the position MUST reset to center default.
- **FR-012**: All occurrences of "sustentabilidad" in the codebase MUST be replaced with "sostenibilidad".
- **FR-013**: All occurrences of "sustentable" in the codebase MUST be replaced with "sostenible".

### Key Entities

- **Team Member**: Represents a team member profile. Existing attributes: name, role, specialty, photo, display order, visibility. New attributes: photo horizontal position, photo vertical position (both as percentage values from 0% to 100%, defaulting to 50%).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The "Equipo" link appears in the navbar on all pages and successfully scrolls to the team section on the homepage.
- **SC-002**: Admins can adjust team photo positioning and see a real-time preview that matches the public site rendering within visible accuracy.
- **SC-003**: Photo position changes made in the admin panel are reflected on the public site after saving.
- **SC-004**: Zero occurrences of "sustentabilidad" or "sustentable" remain in the codebase after the fix.
- **SC-005**: All existing functionality (navigation, team member CRUD, photo upload) continues working without regression.

## Assumptions

- The "Equipo" link follows the same anchor-scroll pattern already used by "Servicios" (`/#servicios`), so no new scroll behavior needs to be invented.
- Photo position is stored as two percentage values (horizontal and vertical), which maps directly to the CSS `object-position` property used for rendering.
- The position editor uses simple range sliders or similar input controls; a full drag-to-reposition interface is not required (though the preview must be real-time).
- "sustentabilidad"/"sustentable" replacements only apply to the codebase (source files and seed data), not to live content already stored in the Convex database by admins.
- The navbar link order is: Inicio, Servicios, Equipo, Proyectos, Blog, Contacto.

## Scope Boundaries

**In scope**:
- Adding "Equipo" anchor link to navbar
- Adding `id="equipo"` to the team section
- Photo position editor in admin team member form
- Circular preview in admin matching public site rendering
- Persisting position values for team members
- Applying position to public site rendering
- Replacing "sustentabilidad"/"sustentable" in codebase and seed data

**Out of scope**:
- Changing the size or shape of team member photos on the public site
- Drag-to-reposition interface (simple controls with preview are sufficient)
- Updating live database content (admin-entered text already in Convex)
- Smooth scroll animation customization (use browser default or existing behavior)
