# Research: Homepage UI Polish

**Feature**: 007-homepage-ui-polish | **Date**: 2026-03-31

## R1: Balanced CSS Grid Distribution Strategy

**Decision**: Use a JavaScript helper function to calculate optimal column count, applied as inline `gridTemplateColumns` style on the services grid container. CSS media queries override for tablet (2 cols) and mobile (1 col).

**Rationale**: CSS `auto-fit` with `minmax()` cannot balance rows — it always fills as many columns as fit, leaving orphan items in the last row. Explicit column counts via JS give full control over the distribution. This approach requires minimal code (~5 lines of logic) and keeps the responsive overrides in CSS.

**Alternatives considered**:
- **CSS-only with `auto-fill`**: Same orphan problem as `auto-fit`. Cannot balance rows.
- **CSS `subgrid` or container queries**: Not widely enough supported and adds complexity without solving the core balancing problem.
- **Flexbox with `flex-basis` percentages**: More complex to manage than grid, especially with gaps. Would require recalculating percentages per breakpoint.

## R2: Team Card Background Application

**Decision**: Add `background-color: var(--color-brand-secondary)` and `border-radius: var(--radius-lg)` to the existing `.card` class in TeamSection.module.css. Define `--color-brand-secondary: #E5DFD5` in variables.css.

**Rationale**: Using a CSS variable rather than a hardcoded hex value follows the existing design token pattern in the codebase and allows future theming. The `--radius-lg` (12px) is consistent with other rounded elements (service cards, block containers).

**Alternatives considered**:
- **Hardcoded `#E5DFD5`**: Works but breaks the design token pattern used throughout the project.
- **New CSS class instead of modifying `.card`**: Unnecessary indirection — the card is the correct target.

## R3: Merging Clients and Alliances into TrustSection

**Decision**: Create a new `TrustSection` component that fetches both datasets and renders them in a single section with two logo rows. Keep the original `ClientsSection` and `AlliancesSection` files untouched (they may be used in other contexts or admin previews).

**Rationale**: The two existing components share ~95% identical code. A unified component reduces visual noise on the homepage (one section instead of two) and better communicates the trust message. Keeping the originals avoids breaking potential standalone usage.

**Alternatives considered**:
- **Modify ClientsSection to accept alliances as props**: Couples two data concerns into one component; messier API.
- **Delete both and only have TrustSection**: Risks breaking if either component is referenced elsewhere (admin, other pages).
- **Render both inside a wrapper div**: Leaves two separate data-fetching components; harder to control the unified header and empty-state logic.
