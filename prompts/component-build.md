Before Writing any code , Strictly follow the `rules.md` while writing any component.

- Use `src/components/templates/about-page-components` as the folder to place all the specific component

`This UI is still part of About Page ` below the above UI You just build of the the about page

Ignore the ingredients border elements for now.

Build the Pixel perfect Code for the UI SS provided. Try to make it as pixel perfect as possible.



<!--------------------------------------------------------------------------------->

# Task

Produce a detailed, structured breakdown for building the UI shown in the attached screenshot. This breakdown will be handed — along with the same screenshot — to a coding agent that will implement it, so it must be precise enough to serve as a complete build specification.

## Context

- **Stack**: Next.js, TypeScript, TailwindCSS
- **Codebase rules**: See the attached `rules.md`. Every decision in the breakdown (folder placement, naming, styling approach, component granularity) must conform to those rules.

## What I need in the breakdown

1. **Component tree** — Identify every distinct component visible in the screenshot. For each one, specify:
   - Its name and the category it belongs to (`atoms`, `molecules`, `organisms/<feature>`, or `templates`) per the folder structure in `rules.md`.
   - Its props / expected data.
   - Any interactive states (hover, active, disabled, loading, empty).

2. **Layout & spacing** — Provide pixel-level measurements or closest Tailwind equivalents for:
   - Overall page padding and content max-width.
   - Gaps, margins, and paddings between and within components.
   - Grid or flex configuration (column counts, breakpoints, alignment).

3. **Typography** — For every text element, specify: font family, weight, size, line-height, letter-spacing, and color — using Tailwind CSS variables as required by `rules.md`.

4. **Colors & theming** — List every color used, mapped to the CSS variables defined in the project. Flag any new color that would need to be added.

5. **Responsive behavior** — Describe how the layout should adapt across standard breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`), noting any elements that reorder, collapse, or hide.

6. **Build order** — Provide a step-by-step implementation sequence (atoms first, then molecules, then organisms, then template assembly) so the coding agent can work incrementally and verify each piece in isolation.