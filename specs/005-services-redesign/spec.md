# Feature Specification: Services Section Redesign

**Feature Branch**: `005-services-redesign`
**Created**: 2026-03-14
**Status**: Draft
**Input**: User description: "Redesign the public services section for a more polished, professional look with better visual hierarchy, compact cards, hover interactions, and alternating block layouts."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visually Engaging Block Layout (Priority: P1)

A visitor lands on the homepage and scrolls to the services section. Each service block has a prominent header with a large, immersive image alongside the block title and subtitle. Blocks alternate their layout direction (image left / image right) to create visual rhythm and prevent monotony. The visitor can quickly scan the section and understand the different service areas at a glance without feeling overwhelmed by repetitive formatting.

**Why this priority**: The block layout is the primary structural element of the services section. If the headers are visually weak or monotonous, visitors will scroll past without engaging. This is the highest-impact change.

**Independent Test**: Navigate to the public homepage, scroll to the services section, and verify that each block header displays a large image with title/subtitle, and that consecutive blocks alternate their image/text positioning.

**Acceptance Scenarios**:

1. **Given** a visitor on the homepage, **When** they scroll to the services section, **Then** each block header displays a prominently sized image with the block title and subtitle clearly visible.
2. **Given** multiple service blocks, **When** rendered sequentially, **Then** consecutive blocks alternate their layout (e.g., image-left/text-right, then image-right/text-left).
3. **Given** a block without an uploaded image, **When** rendered, **Then** the block header still displays cleanly with a styled placeholder instead of broken layout.

---

### User Story 2 - Compact and Interactive Service Cards (Priority: P2)

Within each service block, individual service cards are displayed in a compact, professional grid. Each card shows the service icon, name, and a brief description without excessive whitespace. When the visitor hovers over a card, it provides subtle visual feedback (e.g., elevation change, color shift, or border highlight) to indicate interactivity and draw attention.

**Why this priority**: Once the visitor is drawn in by the block header, the cards are what they actually read. Making them compact and interactive improves scanability and perceived quality.

**Independent Test**: Visit the services section, verify cards are more compact than before, and hover over individual cards to confirm visual feedback is present.

**Acceptance Scenarios**:

1. **Given** a service block with multiple services, **When** the cards are displayed, **Then** they appear in a compact grid layout with reduced vertical spacing compared to the current design.
2. **Given** a service card, **When** the visitor hovers over it, **Then** the card provides a visible but subtle interactive response (e.g., slight lift, shadow change, or border highlight).
3. **Given** service cards with varying description lengths, **When** displayed in the grid, **Then** all cards in the same row maintain consistent height alignment.

---

### User Story 3 - Responsive and Accessible Design (Priority: P3)

The redesigned services section adapts gracefully to mobile, tablet, and desktop screen sizes. On mobile, blocks stack vertically with the image above the text. Cards switch to a single-column or two-column layout depending on screen width. All interactive elements remain accessible via keyboard navigation and meet color contrast standards.

**Why this priority**: Responsive behavior and accessibility are essential for production quality but build on the layout established in US1 and US2.

**Independent Test**: Resize the browser window from desktop to mobile widths, verifying the layout adapts at each breakpoint without content overflow or broken alignment.

**Acceptance Scenarios**:

1. **Given** a desktop viewport (1024px+), **When** viewing the services section, **Then** block headers show side-by-side image and text, cards display in a multi-column grid.
2. **Given** a tablet viewport (768px-1023px), **When** viewing the services section, **Then** block headers stack image above text, cards display in a 2-column grid.
3. **Given** a mobile viewport (below 768px), **When** viewing the services section, **Then** block headers stack vertically, cards display in a single column, and alternating layout is disabled.
4. **Given** a keyboard-only user, **When** navigating the services section, **Then** hover-like focus styles appear on cards when tabbed to.

---

### Edge Cases

- What happens when a block has no image? The header renders with a styled placeholder background — no broken image icon.
- What happens when a block has only one service? The single card centers or fills the available space without awkward gaps.
- What happens when a block has many services (5+)? The grid wraps naturally without layout overflow.
- What happens when a service has a very long description? Text wraps gracefully without breaking card height alignment in the same row.
- What happens when images are slow to load? Loading placeholders prevent layout shift.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The services section MUST display each block header with a prominently sized image (significantly larger than the current small thumbnail).
- **FR-002**: Block headers MUST alternate their image/text layout direction between consecutive blocks to create visual rhythm.
- **FR-003**: Service cards within each block MUST appear more compact with reduced padding and whitespace compared to the current design.
- **FR-004**: Service cards MUST display a hover effect that provides clear visual feedback when the user's cursor enters the card.
- **FR-005**: Service cards MUST display a focus effect (similar to hover) when receiving keyboard focus for accessibility.
- **FR-006**: The services section MUST be responsive, adapting layout for desktop (1024px+), tablet (768px-1023px), and mobile (below 768px) viewports.
- **FR-007**: Blocks with no uploaded image MUST render a styled placeholder instead of a broken image or empty space.
- **FR-008**: Service cards in the same grid row MUST maintain consistent visual height regardless of description length.
- **FR-009**: The section MUST render without any layout shift or overflow at any supported viewport width.
- **FR-010**: The redesign MUST NOT require any changes to the backend data model or existing admin interfaces.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The services section occupies at least 20% less vertical space on desktop compared to the current design, improving content density.
- **SC-002**: 100% of service cards display a visible hover/focus effect when interacted with.
- **SC-003**: Consecutive service blocks visually alternate their layout direction, verified across all blocks.
- **SC-004**: The section renders correctly at 320px, 768px, 1024px, and 1440px viewport widths with no horizontal overflow.
- **SC-005**: Page loads with zero layout shift in the services section (no content jumping during image load).

## Assumptions

- The existing block image, title, subtitle, and service data from the backend is sufficient — no new fields are needed.
- Material Icons will continue to be used for service card icons.
- The design system's existing CSS variables (colors, spacing, fonts) will be used for consistency.
- The section "Nuestros Servicios" heading and subtitle above the blocks remain unchanged.
- Performance is maintained — no new libraries or heavy assets are introduced.

## Out of Scope

- Changes to the admin panel or service/block editing forms.
- Changes to the backend data model or schema.
- Adding new data fields (e.g., service links, CTA buttons on cards).
- Animation libraries or script-driven transitions (only lightweight interactions).
- Changes to other homepage sections (team, projects, clients, etc.).
