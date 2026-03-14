# Quickstart: Services Section Redesign

**Feature**: 005-services-redesign | **Date**: 2026-03-14

## Prerequisites

- Dev server running: `npm run dev` (localhost:3000)
- At least 2 service blocks with images and services configured via admin panel
- Browser with DevTools for responsive testing

## Manual Verification Checklist

### 1. Block Header Visual Impact (US1)

1. Navigate to `localhost:3000` and scroll to "Nuestros Servicios"
2. Verify each block header has a **large, prominent image** (roughly 45% of header width on desktop)
3. Verify title and subtitle are clearly visible alongside the image
4. Verify consecutive blocks **alternate layout direction** (image-left/text-right, then image-right/text-left)

### 2. Compact Cards (US2)

1. Within each block, verify service cards are **left-aligned** with icon inline next to the title
2. Verify cards have **reduced padding** compared to before (visually more compact)
3. **Hover** over a card — verify subtle visual feedback (border accent, background tint, refined shadow)
4. Verify cards in the same row maintain **consistent height**

### 3. Keyboard Accessibility (US3)

1. Use **Tab** key to navigate through service cards
2. Verify each card shows a **visible focus indicator** when tabbed to (similar to hover effect)
3. Verify focus outline is clearly visible and doesn't overlap content

### 4. Responsive Behavior (US3)

1. **Desktop (1440px)**: Side-by-side header layout, alternating directions, multi-column card grid
2. **Desktop (1024px)**: Same as above, may show fewer columns
3. **Tablet (768px)**: Header stacks (image above text), 2-column card grid, no alternating
4. **Mobile (375px)**: Header stacks vertically, single-column cards, no alternating
5. At all widths: **no horizontal overflow or layout shift**

### 5. Edge Cases

1. If a block has **no image**: Verify a styled placeholder background appears (no broken image icon)
2. If a block has **only 1 service**: Card centers or fills space without awkward gaps
3. If a block has **5+ services**: Grid wraps naturally

### 6. Vertical Space (SC-001)

1. Compare the overall vertical height of the services section against the previous design
2. The section should occupy **at least 20% less vertical space** on desktop

## Build Verification

```bash
npx tsc --noEmit    # No type errors
npm run build        # Build succeeds
```
