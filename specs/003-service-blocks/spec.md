# Feature Specification: Service Blocks - Grouped Services with Images

**Feature Branch**: `003-service-blocks`
**Created**: 2026-03-13
**Status**: Draft
**Input**: User description: "Servicios must be grouped by blocks. Each block has a subtitle and an image. Admin can create blocks and assign/remove services. Four initial blocks defined."

## Clarifications

### Session 2026-03-13

- Q: Should admins be able to set/change a service's block from the service edit form, or only from the block detail view? → A: Both. Block assignment available from the block detail view AND as a dropdown on the service edit form.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Public Services Section Redesign (Priority: P1)

As a website visitor, I want to see services organized into thematic blocks (each with a title, subtitle, and image) so I can quickly understand the range and focus areas of Zephyra's consulting offerings.

Currently, services are displayed as a flat grid of cards. After this change, they will be grouped under visually distinct blocks. Each block shows its title, a descriptive subtitle, an associated image, and the list of services that belong to it.

**Why this priority**: This is the primary user-facing change. Without the redesigned public section, the entire feature has no visible impact.

**Independent Test**: Navigate to the homepage services section and verify that services appear grouped under four blocks, each with its title, subtitle, and image. Verify block ordering matches the configured display order.

**Acceptance Scenarios**:

1. **Given** services are assigned to blocks, **When** a visitor loads the homepage, **Then** the services section displays services grouped under their respective blocks, with each block showing its title, subtitle, and image.
2. **Given** a block has no services assigned, **When** a visitor loads the homepage, **Then** that block is not displayed in the services section.
3. **Given** a block is not marked as active, **When** a visitor loads the homepage, **Then** that block and its services are not shown.
4. **Given** blocks exist with a defined display order, **When** a visitor loads the homepage, **Then** blocks appear in the configured order.

---

### User Story 2 - Admin Service Block Management (Priority: P2)

As an admin, I want to create, edit, and delete service blocks so I can organize how services are presented to visitors.

Each block has a title, subtitle (descriptive text), an associated image, a display order, and an active/inactive status. Admins can create new blocks, update their details, reorder them, and soft-delete them.

**Why this priority**: Without block management, there's no way to create or modify the grouping structure. This enables the admin to define and maintain the block hierarchy.

**Independent Test**: Log into the admin panel, navigate to the service blocks section, create a new block with title, subtitle, and image. Edit an existing block. Verify the block appears in the list and can be toggled active/inactive.

**Acceptance Scenarios**:

1. **Given** an admin is on the service blocks list page, **When** they click "Nuevo bloque", **Then** a form is shown to create a new block with fields for title, subtitle, image, and active status.
2. **Given** a block exists, **When** the admin edits it and changes the subtitle, **Then** the updated subtitle is saved and reflected in the list.
3. **Given** a block exists, **When** the admin deletes it, **Then** the block is soft-deleted and no longer visible in the admin list or public site. Services previously assigned to it become unassigned.
4. **Given** multiple blocks exist, **When** the admin reorders them, **Then** the new order is reflected on the public site.

---

### User Story 3 - Assign and Remove Services from Blocks (Priority: P3)

As an admin, I want to assign existing services to a block and remove them from a block so I can control which services appear under each thematic group.

Each service can belong to at most one block. Unassigned services are not displayed on the public site (since the new design only shows services within blocks). The assignment interface is accessible from two places: the block detail/edit view (manage multiple services for a block) and the individual service edit form (a block dropdown to assign or change a service's block).

**Why this priority**: This is the linking mechanism between blocks and services. It depends on blocks existing (US2) and is needed for the public display to work correctly (US1).

**Independent Test**: In admin, open a block's detail view. Assign a service that is currently unassigned. Verify it appears under that block on the public site. Remove the service from the block. Verify it no longer appears.

**Acceptance Scenarios**:

1. **Given** a block exists and unassigned services exist, **When** the admin assigns a service to the block, **Then** the service appears under that block on the public site.
2. **Given** a service is assigned to a block, **When** the admin removes it from the block, **Then** the service no longer appears under that block on the public site.
3. **Given** a service is assigned to Block A, **When** the admin assigns it to Block B, **Then** the service moves from Block A to Block B (a service can only belong to one block).
4. **Given** services are assigned to a block, **When** the admin reorders services within the block, **Then** the new order is reflected on the public site.

---

### User Story 4 - Seed Initial Blocks with Predefined Services (Priority: P4)

As a system administrator, I want the seed data to include the four predefined service blocks with their associated services so that the application is immediately usable after initial deployment.

The four initial blocks are:
1. **Estrategia y gestion de sostenibilidad** - "Integramos la sostenibilidad en la gestion diaria de las organizaciones." Services: Diseno de proyectos con impacto socioambiental, Certificacion B Corp, Sistemas de gestion ISO.
2. **Medicion y reportes de impacto** - "Medimos y analizamos el impacto para fortalecer la toma de decisiones y la mejora continua." Services: Medicion de huella de carbono, Informes de sostenibilidad.
3. **Personas, cultura y diversidad** - "Impulsamos organizaciones mas inclusivas, equitativas y comprometidas." Services: Capacitaciones en sostenibilidad, Planes de igualdad de genero.
4. **Comunicacion con impacto** - "Potenciamos el valor de lo que las organizaciones hacen bien." Services: Comunicacion sostenible.

**Why this priority**: Seed data is a developer convenience for initial setup and testing. It does not affect production functionality directly.

**Independent Test**: Run the seed command and verify that 4 blocks exist, each with the correct services assigned.

**Acceptance Scenarios**:

1. **Given** a fresh database, **When** the seed command runs, **Then** 4 service blocks are created with the correct titles and subtitles.
2. **Given** the seed has run, **When** checking the service-to-block assignments, **Then** each service is assigned to its correct block as specified above.

---

### Edge Cases

- What happens when a block has no services assigned? It is hidden from the public site.
- What happens when a service is not assigned to any block? It is not displayed on the public site. The admin list still shows it as "unassigned" so it can be managed.
- What happens when the last service is removed from a block? The block is hidden on the public site (empty blocks are not shown).
- What happens when a block is deleted that has services assigned? The services become unassigned (their block reference is cleared). They remain in the system but are not displayed publicly until reassigned.
- What happens when all blocks are inactive or empty? The services section displays a fallback empty state message.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST support a "service block" entity with title, subtitle, image, display order, and active/inactive status.
- **FR-002**: System MUST group services under blocks on the public-facing services section, showing each block's title, subtitle, and image.
- **FR-003**: System MUST hide blocks from the public site when they have no assigned services or are inactive.
- **FR-004**: System MUST allow admins to create new service blocks with title, subtitle, image upload, and active status.
- **FR-005**: System MUST allow admins to edit existing service block details (title, subtitle, image, active status).
- **FR-006**: System MUST allow admins to soft-delete service blocks. Deleting a block clears the block reference from its assigned services.
- **FR-007**: System MUST allow admins to reorder blocks, controlling the display order on the public site.
- **FR-008**: System MUST allow admins to assign a service to a block. A service can belong to at most one block at a time. Assignment is available from both the block detail view and the individual service edit form (via a block dropdown).
- **FR-009**: System MUST allow admins to remove a service from a block, making it unassigned.
- **FR-010**: System MUST allow admins to reorder services within a block.
- **FR-011**: System MUST display blocks in their configured display order on the public site, and services within each block in their configured order.
- **FR-012**: System MUST provide an admin list view for service blocks showing title, service count, active status, and actions (edit, delete).
- **FR-013**: System MUST include the four predefined blocks and their service assignments in the seed data.
- **FR-014**: The redesigned public services section MUST maintain visual consistency with the existing site design (typography, colors, spacing, responsive behavior).
- **FR-015**: Admin services list MUST indicate which block each service belongs to, or show "Sin bloque" if unassigned.

### Key Entities

- **Service Block**: Represents a thematic grouping of services. Attributes: title, subtitle (descriptive text), image, display order, active status. A block contains zero or more services.
- **Service** (modified): An existing entity that now has an optional association to a service block. A service can belong to at most one block. Services retain all their existing attributes (title, description, icon, display order within block, active status).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public services section displays services grouped under their respective blocks within 2 seconds of page load.
- **SC-002**: Admins can create a new service block and assign services to it in under 3 minutes.
- **SC-003**: 100% of existing services are correctly assigned to their designated blocks after seeding.
- **SC-004**: The redesigned services section is fully responsive and renders correctly on desktop (1200px+), tablet (768px-1199px), and mobile (below 768px) viewports.
- **SC-005**: Zero regression in existing service management functionality (creating, editing, toggling, deleting individual services continues to work).
- **SC-006**: Empty blocks (no assigned services or inactive) produce zero visible artifacts on the public site.

## Assumptions

- Each service belongs to at most one block. There is no need for services to appear in multiple blocks simultaneously.
- The block's image is a decorative/thematic image that visually represents the block's category. It is not a logo or icon.
- Existing services that are already in the database will need to be manually assigned to blocks by admins (the seed data only applies to fresh databases).
- The admin block management section is a new admin page, following the same layout patterns as existing admin sections (list page, create page, edit page).
- The "Servicios" navbar link (/#servicios) continues to scroll to the services section, which now renders the block-based layout.
- Block images follow the same upload pattern as other images in the system (upload to storage, reference by storage ID).
