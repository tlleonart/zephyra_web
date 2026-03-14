# Convex Schema Changes: Service Blocks

**Date**: 2026-03-13
**Feature**: 003-service-blocks

## Schema Diff

### New table: serviceBlocks

```typescript
serviceBlocks: defineTable({
  title: v.string(),
  subtitle: v.string(),
  imageStorageId: v.optional(v.id("_storage")),
  displayOrder: v.number(),
  isActive: v.boolean(),
  deletedAt: v.optional(v.number()),
  deletedBy: v.optional(v.id("adminUsers")),
})
  .index("by_order", ["displayOrder"])
  .index("by_active_order", ["isActive", "displayOrder"])
  .index("by_deleted", ["deletedAt"]),
```

### Modified table: services

```diff
 services: defineTable({
   title: v.string(),
   description: v.string(),
   iconName: v.string(),
   displayOrder: v.number(),
   isActive: v.boolean(),
+  blockId: v.optional(v.id("serviceBlocks")),
+  blockDisplayOrder: v.optional(v.number()),
   deletedAt: v.optional(v.number()),
   deletedBy: v.optional(v.id("adminUsers")),
 })
   .index("by_order", ["displayOrder"])
   .index("by_active_order", ["isActive", "displayOrder"])
-  .index("by_deleted", ["deletedAt"]),
+  .index("by_deleted", ["deletedAt"])
+  .index("by_block", ["blockId"])
+  .index("by_block_order", ["blockId", "blockDisplayOrder"]),
```

## New Mutations (serviceBlocks.ts)

### `create` mutation
```typescript
args: {
  title: v.string(),
  subtitle: v.string(),
  imageStorageId: v.optional(v.id("_storage")),
  isActive: v.boolean(),
}
// Auto-assigns displayOrder
```

### `update` mutation
```typescript
args: {
  id: v.id("serviceBlocks"),
  title: v.optional(v.string()),
  subtitle: v.optional(v.string()),
  imageStorageId: v.optional(v.id("_storage")),
  isActive: v.optional(v.boolean()),
}
```

### `remove` mutation
```typescript
args: {
  id: v.id("serviceBlocks"),
  adminUserId: v.id("adminUsers"),
}
// Soft-deletes block AND clears blockId/blockDisplayOrder on all assigned services
```

### `reorder` mutation
```typescript
args: {
  orderedIds: v.array(v.id("serviceBlocks")),
}
```

### `assignService` mutation
```typescript
args: {
  blockId: v.id("serviceBlocks"),
  serviceId: v.id("services"),
}
// Sets service.blockId and auto-assigns blockDisplayOrder
```

### `removeService` mutation
```typescript
args: {
  serviceId: v.id("services"),
}
// Clears service.blockId and blockDisplayOrder
```

### `reorderServices` mutation
```typescript
args: {
  blockId: v.id("serviceBlocks"),
  orderedServiceIds: v.array(v.id("services")),
}
// Updates blockDisplayOrder for each service
```

## New Queries (serviceBlocks.ts)

### `list` query
Returns all non-deleted blocks with service count and image URL.

### `listPublic` query
Returns active, non-deleted blocks with their active, non-deleted services (ordered). Excludes empty blocks.

### `getById` query
Returns single block with its assigned services and image URL.

### `listForSelect` query
Returns minimal block data (id, title) for dropdown selectors.

## Modified Mutations (services.ts)

### `create` mutation - add optional args
```typescript
+ blockId: v.optional(v.id("serviceBlocks")),
```

### `update` mutation - add optional args
```typescript
+ blockId: v.optional(v.id("serviceBlocks")),
```

## Modified Queries (services.ts)

### `list` query
Add `blockId` and block title to returned fields (join with serviceBlocks table).

### `getById` query
Add `blockId` to returned fields.
