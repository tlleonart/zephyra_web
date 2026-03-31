# Quickstart: Homepage UI Polish

**Branch**: `007-homepage-ui-polish`

## Prerequisites

- Node.js 20.9+
- Convex dev server running (`npx convex dev`)
- Development server running (`npm run dev`)

## What This Feature Changes

Three visual corrections to the public homepage:

1. **Service grid balancing** — Service cards within each block now distribute evenly across rows (e.g., 4 items = 2+2 instead of 3+1)
2. **Team card styling** — Each team member card gets a beige (`#E5DFD5`) background with rounded corners
3. **Clients + Alliances merge** — The two separate sections become one "Confían en nosotros" section with clients on top and alliances below

## Files Modified

| File | Change |
|------|--------|
| `src/styles/variables.css` | Add `--color-brand-secondary` |
| `src/components/public/ServicesSection/ServicesSection.tsx` | Add column-count logic |
| `src/components/public/ServicesSection/ServicesSection.module.css` | Update grid styles |
| `src/components/public/TeamSection/TeamSection.module.css` | Add card background |
| `src/components/public/TrustSection/` | New unified component |
| `src/components/public/HomePageContent.tsx` | Replace ClientsSection + AlliancesSection with TrustSection |

## How to Verify

1. Navigate to the homepage
2. **Services**: Check each service block — cards should be evenly distributed (no orphan single card when count > 3)
3. **Team**: Each member card should have a warm beige background with rounded corners
4. **Trust section**: Should show one section titled "Confían en nosotros" with client logos above and alliance logos below
5. Resize browser to check tablet (768px-1023px) and mobile (<768px) breakpoints
