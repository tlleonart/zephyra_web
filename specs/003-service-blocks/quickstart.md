# Quickstart: Service Blocks

**Date**: 2026-03-13
**Branch**: `003-service-blocks`

## Prerequisites

- Existing Zephyra dev environment set up
- Convex dev server running (`npx convex dev`)
- Next.js dev server running (`npm run dev`)

## Changes Overview

### 1. New Entity: Service Blocks

**New files**:
- `convex/serviceBlocks.ts` - CRUD mutations and queries
- `src/features/services/components/ServiceBlockForm/ServiceBlockForm.tsx` - Create/edit form
- `src/features/services/components/ServiceBlockList/ServiceBlockList.tsx` - Admin list
- `src/app/(dashboard)/admin/service-blocks/` - Admin route pages

**Modified files**:
- `convex/schema.ts` - Add serviceBlocks table, add blockId/blockDisplayOrder to services
- `convex/services.ts` - Add blockId to create/update mutations, add block info to queries
- `convex/seedContent.ts` - Add block seed data with service assignments

### 2. Admin Block Management

**Verification**:
1. Go to `/admin/service-blocks`
2. Create a new block with title, subtitle, and image
3. Assign services from the block edit page
4. Verify assigned services appear under the block
5. Edit the block and change subtitle
6. Toggle active/inactive status
7. Reorder blocks

### 3. Service Form Block Dropdown

**Modified file**: `src/features/services/components/ServiceForm/ServiceForm.tsx`

**Verification**:
1. Go to `/admin/services` and edit a service
2. Verify a "Bloque" dropdown appears with available blocks + "Sin bloque"
3. Assign the service to a block via the dropdown
4. Save and verify the services list shows the block name

### 4. Public Services Section Redesign

**Modified files**:
- `src/components/public/ServicesSection/ServicesSection.tsx` - Block-based layout
- `src/components/public/ServicesSection/ServicesSection.module.css` - New styles

**Verification**:
1. Navigate to homepage
2. Scroll to services section
3. Verify services are grouped under blocks with title, subtitle, and image
4. Verify empty or inactive blocks are hidden
5. Test responsive behavior at different viewports

### 5. Sidebar Navigation

**Modified file**: `src/features/dashboard/components/Sidebar/Sidebar.tsx`

**Verification**:
1. Log into admin
2. Verify "Bloques" appears in the sidebar after "Servicios"
3. Click it and verify it navigates to `/admin/service-blocks`

## Build & Test

```bash
# Type check
npx tsc --noEmit

# Build
npm run build

# Run dev server and test manually
npm run dev
```
