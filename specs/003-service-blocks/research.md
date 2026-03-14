# Research: Service Blocks

**Date**: 2026-03-13
**Feature**: 003-service-blocks

## Research Findings

### 1. Data Relationship Pattern: Block-to-Service

**Decision**: Add an optional `blockId` foreign key on the existing `services` table pointing to the new `serviceBlocks` table, plus a `blockDisplayOrder` field for per-block ordering.

**Rationale**: This is the simplest approach - a service optionally belongs to one block. The existing `displayOrder` field on services continues to control admin list ordering. The new `blockDisplayOrder` controls ordering within a block on the public site. This avoids a junction table (unnecessary for a 1:N relationship) and keeps the services table as the single source of truth.

**Alternatives considered**:
- Junction table (serviceBlockAssignments): Rejected - over-engineering for a 1:N relationship. Junction tables are for M:N relationships.
- Reuse existing `displayOrder` for both admin list and block ordering: Rejected - changing order in one context would affect the other, causing confusing side effects.
- Store service IDs in an array on the block record: Rejected - Convex doesn't support efficient array-based queries, and it violates normalization.

### 2. Public Query Strategy

**Decision**: Create a single `serviceBlocks.listPublic` query that fetches active blocks and their assigned active services in one query handler (no N+1).

**Rationale**: Convex query handlers can perform multiple database reads within a single handler. By fetching blocks first, then fetching services for each block within the same handler, we avoid client-side N+1 patterns. The public component makes a single `useQuery` call.

**Key finding**: The existing `services.listPublic` query can be preserved for backward compatibility but the public ServicesSection component will switch to using `serviceBlocks.listPublic`.

### 3. Admin Block Management Pattern

**Decision**: Follow the exact same admin pattern used by other entities (services, projects, team, etc.): list page, create page, edit page, with corresponding feature components (ServiceBlockList, ServiceBlockForm).

**Rationale**: The existing admin dashboard has a consistent pattern across all entity types. Following this pattern ensures UX consistency (Constitution Principle III) and reduces cognitive load for admins who are already familiar with the interface.

**Key finding**: The sidebar navigation (`Sidebar.tsx`) uses a `navItems` array. The new "Bloques de Servicios" item should be placed directly after "Servicios" in the nav order, since blocks are a parent/grouping concept for services.

### 4. Service Assignment UI in Block Detail

**Decision**: The block edit page includes a service assignment section below the block form fields. This section shows: (1) services currently assigned to this block with remove buttons, and (2) a dropdown/selector to add unassigned services.

**Rationale**: This follows the pattern of managing child items from the parent's edit view. Similar to how the ProjectForm includes an AchievementsList component for managing achievements inline.

**Alternatives considered**:
- Drag-and-drop between blocks: Rejected - significantly more complex UI with marginal UX benefit for ~8 services across ~4 blocks.
- Separate "Assignments" page: Rejected - unnecessary navigation step when the block edit page can handle it inline.

### 5. Service Form Block Dropdown

**Decision**: Add an optional "Bloque" dropdown to the existing ServiceForm, populated with all active blocks. This allows admins to assign/change a service's block while editing the service itself.

**Rationale**: Clarification session confirmed this UX (Option B). Having block assignment available from both the block detail view and the service form provides flexibility without forcing admins to navigate between sections.

**Key finding**: The dropdown needs a "Sin bloque" (no block) option to allow unassigning a service from its current block.

### 6. Public Section Redesign Layout

**Decision**: Replace the flat service card grid with a vertical stack of block sections. Each block section contains: the block image (as a background or side image), the block title and subtitle, and a grid of service cards belonging to that block.

**Rationale**: The user specified that each block should have an image "which should be seen at the frontend." A vertical stack of block sections provides clear visual separation between groups and allows each block's image to be prominently displayed. The service cards within each block use the same card pattern (icon, title, description) as the current design.

**Alternatives considered**:
- Tabs/accordion per block: Rejected - hides content behind interaction, reducing discoverability.
- Horizontal carousel per block: Rejected - poor mobile UX and hides content.
- Masonry/mixed layout: Rejected - harder to maintain visual consistency.

### 7. Seed Data Strategy

**Decision**: Extend the existing `seedAll` mutation to create blocks after services, then update services with their block assignments.

**Rationale**: The seed mutation already creates services. After creating all services, we create the 4 blocks, then patch each service with its `blockId` and `blockDisplayOrder`. This keeps the seed logic in a single transactional mutation.

### 8. Sidebar Navigation Placement

**Decision**: Add "Bloques" as a nav item directly after "Servicios" in the admin sidebar, using a grid/layout icon.

**Rationale**: Blocks are the parent/grouping entity for services, so placing them adjacent to services creates a logical grouping in the navigation.
