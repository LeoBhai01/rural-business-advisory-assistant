# GramVenture component library

GramVenture uses a small, composable visual system for rural-first business planning. Components are intentionally touch-friendly, support a 360px viewport, and use semantic theme tokens so the light and dark modes remain coherent.

## Layout

- **Sidebar** provides persistent workspace navigation on desktop and a slide-in menu on mobile.
- **Header** contains language selection, a persistent light/dark toggle, notifications, and the responsive menu trigger.
- **PageTitle** establishes the eyebrow, display title, explanatory subtitle, and contextual action pattern.
- **Panel** is the core surface primitive. It uses the shared `panel` class for a soft border, layered card background, and restrained shadow.

## Data and trust

- **ProvenanceChip** labels every important number as `Observed`, `Derived`, `Estimated`, or `Assumed`. Hover text includes the source and timestamp.
- **ScoreRing** communicates the explainable feasibility score without fake decimal precision.
- **StatCard** handles top-line metrics with a label, large value, context line, icon, and optional provenance chip.
- The app shows a persistent preliminary-estimate disclaimer in the Financial Plan screen.

## Workflow components

- **Wizard** is a three-step flow for location, margin capital, and business direction. It exposes voice-input affordances, a mock map-pin area, range controls, category selection, and save/exit navigation.
- **Report** contains the score breakdown, SWOT, market reach bars, AI explanation, competitor heatmap, and the bridge to the financial plan.
- **Finance** uses `calculateFinancials()` to keep project cost, subsidy estimate, loan amount, and EMI derived from inputs. Scheme cards use fit indicators and the repayment table includes a moratorium row.
- **Simulator** is the killer interaction: the capital slider and category comparison update live, while the model explanation panel stays anchored to the selected scenario.

## Interaction rules

1. Use buttons for all state-changing controls and provide visible focus states through the shared outline token.
2. Keep a minimum touch target of approximately 40px for icon buttons and 44px for primary actions.
3. Use `sonner` for temporary feedback in demo-only actions.
4. Do not display fake precision. Use round scores, ranges, and confidence bands.
5. Keep animations below 300ms and respect `prefers-reduced-motion`.
6. Keep mock mode self-contained in `client/src/data/mockData.ts`; when the backend is connected, replace those reads with the expected `/api/v1` contract without changing the visual components.

## Theme

The palette is inspired by a Kerala courtyard: deep betel-leaf green for action, warm turmeric gold for highlights, parchment neutrals for light mode, and a forest-night surface for dark mode. `client/src/index.css` is the source of truth for tokens; do not hardcode theme colors in new components unless they are brand illustration colors.
