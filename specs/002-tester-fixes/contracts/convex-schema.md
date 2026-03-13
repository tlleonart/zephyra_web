# Convex Schema Changes: Team Member Photo Position

**Date**: 2026-03-13
**Feature**: 002-tester-fixes

## Schema Diff

### teamMembers table

```diff
 teamMembers: defineTable({
   name: v.string(),
   role: v.string(),
   specialty: v.string(),
   imageStorageId: v.optional(v.id("_storage")),
+  imagePositionX: v.optional(v.number()),
+  imagePositionY: v.optional(v.number()),
   displayOrder: v.number(),
   isVisible: v.boolean(),
   deletedAt: v.optional(v.number()),
   deletedBy: v.optional(v.id("adminUsers")),
 })
```

No index changes.

## Mutation Changes

### `create` mutation

Add optional arguments:
```typescript
imagePositionX: v.optional(v.number()),  // 0-100, default 50
imagePositionY: v.optional(v.number()),  // 0-100, default 50
```

### `update` mutation

Add optional arguments:
```typescript
imagePositionX: v.optional(v.number()),
imagePositionY: v.optional(v.number()),
```

## Query Changes

### `listPublic` query

Add to returned fields:
```typescript
imagePositionX: member.imagePositionX,
imagePositionY: member.imagePositionY,
```

### `getById` query

Add to returned fields:
```typescript
imagePositionX: member.imagePositionX,
imagePositionY: member.imagePositionY,
```
