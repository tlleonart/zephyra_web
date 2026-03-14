# Feature Specification: Team Editor Fixes

**Feature Branch**: `004-team-editor-fixes`
**Created**: 2026-03-14
**Status**: Draft
**Input**: User description: "Two improvements for team member management: 1) Team member display order on the public frontend is not working correctly - admins need to be able to control and reorder the order in which team members appear on the public site. 2) The team member image editing experience needs improvement - when uploading or changing a team photo, admins need a live preview showing how the image will look on the frontend (cropped in a circle), with the ability to adjust the image position (pan/crop) so they can avoid cutting off faces. The position editor should show the actual frontend rendering so admins can see exactly what visitors will see."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Team Member Reordering (Priority: P1)

As an admin, I want to control the order in which team members appear on the public website so that I can prioritize key team members (e.g., cofounders first) and present the team in a deliberate, professional arrangement.

Currently, the public frontend does not respect the display order set by admins. Admins need a way to reorder team members from the admin panel and have that order immediately reflected on the public site.

**Why this priority**: Display order directly affects the first impression visitors have of the team. Cofounders and senior members should appear before assistants and junior staff. Without ordering control, the team section looks unintentional and unprofessional.

**Independent Test**: Navigate to the admin team list, reorder members (e.g., move the last member to first position), then visit the public site and verify the team section reflects the new order.

**Acceptance Scenarios**:

1. **Given** an admin is on the team members admin page, **When** they reorder members using the provided controls (e.g., drag-and-drop or up/down buttons), **Then** the new order is saved immediately.
2. **Given** an admin has reordered team members in the admin panel, **When** a visitor views the public team section, **Then** team members appear in the exact order set by the admin.
3. **Given** an admin changes the order of visible team members, **When** the order is saved, **Then** only visible members appear on the public site, in the admin-defined order.
4. **Given** multiple team members exist with the same visibility status, **When** an admin reorders them, **Then** the system persists the order across page reloads and sessions.

---

### User Story 2 - Image Position Preview and Editing (Priority: P2)

As an admin, I want a live preview of how a team member's photo will appear on the public website (cropped as a circle) so that I can adjust the image position to avoid cutting off faces or important parts of the photo.

The preview in the admin form must match the actual rendering on the public site: a circular crop with the same proportions. Admins should be able to pan the image horizontally and vertically within the circle and see the result in real time before saving.

**Why this priority**: Team photos with poorly cropped faces look unprofessional and can misrepresent team members. A faithful preview ensures admins can confidently set the right crop without trial-and-error of saving, checking the public site, and re-editing.

**Independent Test**: Upload a team member photo in the admin form, use the position controls to adjust the visible area within the circular preview, save, then visit the public team section and confirm the image appears exactly as previewed.

**Acceptance Scenarios**:

1. **Given** an admin uploads a team member photo, **When** the upload completes, **Then** a circular preview appears showing how the image will look on the public site.
2. **Given** a circular preview is visible, **When** the admin adjusts the horizontal slider, **Then** the image pans left/right within the circle in real time.
3. **Given** a circular preview is visible, **When** the admin adjusts the vertical slider, **Then** the image pans up/down within the circle in real time.
4. **Given** the admin has adjusted the image position, **When** they save the team member, **Then** the position values are persisted.
5. **Given** a team member with a saved custom position, **When** a visitor views the public team section, **Then** the photo appears cropped in a circle at the exact position the admin set in the preview.
6. **Given** an admin is editing a team member with an existing photo and position, **When** the edit form loads, **Then** the circular preview shows the current saved position.
7. **Given** an admin uploads a new photo replacing an existing one, **When** the new photo loads, **Then** the position resets to center (50%, 50%) and the preview updates to the new image.

---

### Edge Cases

- What happens when a team member has no photo uploaded? The position editor should not appear; only the image upload area is shown.
- What happens when the image file is very tall (portrait) or very wide (landscape)? The circular preview must handle both aspect ratios, showing the image with `object-fit: cover` so the circle is always fully filled.
- What happens when an admin reorders members and another admin is viewing the list simultaneously? The list should update in real time (leveraging existing real-time capabilities).
- What happens when there is only one team member? Reorder controls may be shown but should handle the single-item case gracefully (no errors).
- What happens when all team members are hidden (not visible)? The public team section should show nothing or an appropriate empty state.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The admin team list MUST provide controls to reorder team members (e.g., drag-and-drop or up/down arrow buttons).
- **FR-002**: When an admin reorders team members, the system MUST persist the new display order immediately.
- **FR-003**: The public team section MUST display visible team members sorted by their admin-defined display order.
- **FR-004**: The admin team member form MUST show a circular image preview that matches the public site rendering when a photo is uploaded.
- **FR-005**: The circular preview MUST use the same crop behavior (circle shape, `cover` fit) and proportions as the public team section.
- **FR-006**: The admin form MUST provide horizontal and vertical sliders to adjust the image position within the circular crop.
- **FR-007**: Position adjustments MUST update the circular preview in real time as the admin moves the sliders.
- **FR-008**: The system MUST persist the image position (horizontal and vertical percentages) when the team member is saved.
- **FR-009**: The public team section MUST apply the saved position values when rendering each team member's photo.
- **FR-010**: When a new photo replaces an existing one, the position MUST reset to center (50%, 50%).
- **FR-011**: The position editor (sliders + preview) MUST only appear when a photo is uploaded; it should be hidden when no photo exists.
- **FR-012**: The admin form MUST include a "reset to center" button that restores position to 50% horizontal, 50% vertical.

### Key Entities

- **Team Member**: Represents a person in the team. Key attributes: name, role, specialty, photo, display order, photo position (horizontal %, vertical %), visibility status.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Admins can reorder team members and see the new order reflected on the public site within 3 seconds of saving.
- **SC-002**: The circular image preview in the admin form visually matches the public site rendering with less than 5% perceptible difference in crop/position.
- **SC-003**: 100% of position adjustments made via sliders are accurately reflected in the preview without needing to save and reload.
- **SC-004**: Admins can complete the full flow (upload photo, adjust position, save) in under 1 minute.
- **SC-005**: Team member order on the public site exactly matches the order configured in the admin panel, with zero discrepancies.

## Assumptions

- The admin panel already has a team member list and create/edit forms. This feature enhances existing functionality rather than creating new pages.
- The team is small (under 20 members), so reordering does not need pagination or virtualization.
- The public site already renders team member photos in a circular crop. The admin preview must replicate this exact rendering.
- Real-time updates are already supported by the existing infrastructure and will apply to order changes automatically.
- Image upload functionality already exists. This feature only adds/improves the position preview and reorder controls.
