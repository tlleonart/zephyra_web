# Data Model: Tester Fixes

**Date**: 2026-03-13
**Feature**: 002-tester-fixes

## Entity Changes

### Team Member (modified)

**Table**: `teamMembers`

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| name | string | yes | - | Full name |
| role | string | yes | - | Position title (e.g., "Cofundadora") |
| specialty | string | yes | - | Professional qualifications |
| imageStorageId | id("_storage") | no | null | Reference to uploaded photo |
| **imagePositionX** | **number** | **no** | **50** | **Horizontal position (0-100%). 0=left, 100=right** |
| **imagePositionY** | **number** | **no** | **50** | **Vertical position (0-100%). 0=top, 100=bottom** |
| displayOrder | number | yes | auto | Controls display ordering |
| isVisible | boolean | yes | true | Public visibility toggle |
| deletedAt | number | no | null | Soft delete timestamp |
| deletedBy | id("adminUsers") | no | null | Who deleted |

**New fields** (bold) are optional to maintain backward compatibility with existing records. When absent, consumers default to 50 (center positioning).

### Validation Rules

- `imagePositionX`: Must be a number between 0 and 100 (inclusive). Represents percentage.
- `imagePositionY`: Must be a number between 0 and 100 (inclusive). Represents percentage.
- Both fields should reset to `undefined` (or 50) when `imageStorageId` changes (new photo uploaded).

### Index Changes

No new indexes needed. Photo position values are never queried or filtered independently.

## Data Flow

### Photo Position - Write Path
1. Admin opens team member form (create or edit)
2. Admin uploads photo → `imageStorageId` is set, position resets to 50/50
3. Admin adjusts sliders → local state updates `imagePositionX`/`imagePositionY`
4. Preview component renders `object-position: {X}% {Y}%` in real-time
5. Admin saves → mutation sends `imagePositionX` and `imagePositionY` to Convex

### Photo Position - Read Path
1. `listPublic` query returns `imagePositionX` and `imagePositionY` for each member
2. `TeamSection` component reads position values (defaults to 50 if undefined)
3. `Image` component receives inline `style={{ objectPosition: '{X}% {Y}%' }}`

## Migration

No data migration needed. New fields are optional. Existing records without position values will render with the default center crop (50% 50%), which matches current behavior.
