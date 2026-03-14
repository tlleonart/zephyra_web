# Research: Services Section Redesign

**Feature**: 005-services-redesign | **Date**: 2026-03-14

## R1: CSS Alternating Layout Pattern

**Decision**: Use CSS `:nth-child(even)` selector with `flex-direction: row-reverse` on `.blockHeader` to alternate image/text positioning.

**Rationale**: Pure CSS solution requires zero JS logic. The `:nth-child(even)` pseudo-class targets every other block, flipping the flex direction. This is the standard approach for alternating layouts — used widely in marketing/landing pages.

**Alternatives considered**:
- **Index-based class in JSX**: Pass `index % 2` as a prop/class. Works but adds unnecessary JS logic when CSS can handle it natively.
- **CSS `:nth-child(odd)` on reversed default**: Equivalent result, just reversed which side is "default". No meaningful difference.

**Implementation**: Add `.block:nth-child(even) .blockHeader { flex-direction: row-reverse; }` in CSS. Disable alternating on mobile by resetting to `column` in the media query.

## R2: Block Header Image Sizing

**Decision**: Increase block image from 200×160px to a flex-based layout where the image takes ~45% of the header width, with a minimum height of 280px on desktop.

**Rationale**: The current 200×160px image is too small to create visual impact. A 45%/55% split between image and text provides prominence while leaving room for title and subtitle. The 280px min-height ensures the image feels immersive without dominating.

**Alternatives considered**:
- **Full-width banner image above text**: Maximum visual impact but doubles vertical space — conflicts with SC-001 (20% less vertical space).
- **Fixed 400×300px**: Better than current but doesn't scale responsively. Percentage-based is more flexible.
- **Background image with overlay text**: Visually striking but has accessibility/contrast concerns and complicates the placeholder state.

## R3: Compact Card Design

**Decision**: Reduce card padding from `var(--spacing-xl)` to `var(--spacing-md)`, switch from centered to left-aligned layout, shrink icon from 64px circle to 40px, and place icon inline with title.

**Rationale**: Left-aligned cards with inline icons are more scannable and professional. Reducing the icon size and padding directly addresses SC-001 (vertical space reduction). The inline icon+title pattern is a modern standard in SaaS/consulting websites.

**Alternatives considered**:
- **Keep centered layout, just reduce padding**: Less visual improvement; still feels generic and repetitive.
- **Remove icons entirely**: Loses visual identity per service. Icons help scanning.
- **Card with left border accent instead of icon**: Clean but loses the material icon system already in place.

## R4: Hover and Focus Effects

**Decision**: Enhance existing hover with a subtle left border accent (3px solid brand color), slight background tint, and refined shadow. Add matching `:focus-visible` styles for keyboard accessibility.

**Rationale**: The current hover (translateY(-4px) + shadow) is already decent. Adding a left border accent provides directional emphasis that works well with the left-aligned card redesign. `:focus-visible` (not `:focus`) ensures focus styles only appear for keyboard users, not mouse clicks.

**Alternatives considered**:
- **Scale transform on hover**: Can cause layout shift in grid; `transform: scale()` affects neighboring cards.
- **Background color change only**: Too subtle on its own.
- **Outline-based focus**: Less visually polished than matching the hover style.

## R5: Image Placeholder Strategy

**Decision**: Use a CSS gradient placeholder background on `.blockImageWrapper` when no image is present, with a subtle icon overlay.

**Rationale**: A gradient using the brand color palette provides visual consistency even without an uploaded image. The existing component already conditionally renders the image wrapper only when `block.imageUrl` exists — we need to ensure the wrapper always renders, with a fallback style.

**Alternatives considered**:
- **Skeleton/shimmer placeholder**: Implies loading, not absence. Confusing for blocks that genuinely have no image.
- **Solid color block**: Works but feels flat and unfinished.
- **Hide header image area entirely**: Creates layout inconsistency between blocks with/without images.

## R6: Grid and Responsive Breakpoints

**Decision**: Use existing breakpoints (768px for mobile, 1024px for tablet). Desktop: side-by-side header with multi-column card grid. Tablet: stacked header, 2-column cards. Mobile: stacked header, single-column cards. Alternating layout disabled below 1024px.

**Rationale**: Matches existing project breakpoints (already in use in the current CSS). Disabling alternating below 1024px prevents awkward layouts where the reversed flex doesn't have enough horizontal space.

**Alternatives considered**:
- **Three breakpoints with alternating on tablet**: Complex and the visual rhythm doesn't work well in stacked layout.
- **Custom breakpoints**: Would diverge from the rest of the project's responsive patterns.
