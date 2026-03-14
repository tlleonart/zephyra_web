# Data Model: Service Blocks

**Date**: 2026-03-13
**Feature**: 003-service-blocks

## Entity Changes

### Service Block (new)

**Table**: `serviceBlocks`

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| title | string | yes | - | Block title (e.g., "Estrategia y gestion de sostenibilidad") |
| subtitle | string | yes | - | Descriptive text shown below the title |
| imageStorageId | id("_storage") | no | null | Reference to uploaded block image |
| displayOrder | number | yes | auto | Controls display ordering on public site |
| isActive | boolean | yes | true | Public visibility toggle |
| deletedAt | number | no | null | Soft delete timestamp |
| deletedBy | id("adminUsers") | no | null | Who deleted |

**Indexes**:
- `by_order`: [displayOrder] - for admin list ordering
- `by_active_order`: [isActive, displayOrder] - for public queries (active blocks in order)
- `by_deleted`: [deletedAt] - for filtering soft-deleted records

### Service (modified)

**Table**: `services`

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| ... | ... | ... | ... | All existing fields unchanged |
| **blockId** | **id("serviceBlocks")** | **no** | **null** | **Reference to parent block. null = unassigned** |
| **blockDisplayOrder** | **number** | **no** | **0** | **Display order within the block on public site** |

**New fields** (bold) are optional to maintain backward compatibility. When `blockId` is absent, the service is unassigned and not shown on the public site.

**New Index**:
- `by_block`: [blockId] - for querying services by block
- `by_block_order`: [blockId, blockDisplayOrder] - for ordered retrieval within a block

### Validation Rules

- `serviceBlocks.title`: Non-empty string, trimmed.
- `serviceBlocks.subtitle`: Non-empty string, trimmed.
- `services.blockId`: Must reference an existing, non-deleted serviceBlock (or be undefined for unassigned).
- `services.blockDisplayOrder`: Non-negative number. Auto-assigned when adding a service to a block.

## Data Flow

### Block Management - Write Path
1. Admin navigates to service blocks admin section
2. Admin creates or edits a block (title, subtitle, image, active status)
3. From block edit page, admin assigns/removes services
4. Assigning a service sets its `blockId` and auto-assigns next `blockDisplayOrder`
5. Removing a service clears its `blockId` and `blockDisplayOrder`

### Block Management - Service Form Path
1. Admin edits an individual service
2. Admin selects a block from the "Bloque" dropdown (or "Sin bloque")
3. Saving the service updates its `blockId` (and auto-assigns `blockDisplayOrder` if new block)

### Public Display - Read Path
1. `serviceBlocks.listPublic` query fetches active, non-deleted blocks ordered by `displayOrder`
2. For each block, fetches active, non-deleted services with matching `blockId`, ordered by `blockDisplayOrder`
3. Blocks with zero services are excluded from the result
4. `ServicesSection` component renders blocks with their services

### Block Deletion - Cascade Path
1. Admin soft-deletes a block (sets `deletedAt`)
2. Mutation also patches all services with that `blockId` to clear `blockId` and `blockDisplayOrder`
3. Services become unassigned but are not deleted

## Migration

No data migration needed for existing deployments. New fields are optional. Existing services without a `blockId` will not appear on the public site until manually assigned to blocks by admins. The seed data update only applies to fresh database seeding.
