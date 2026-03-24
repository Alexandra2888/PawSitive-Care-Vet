# RFC: PawSitive Care Vet — Design System

> **Status:** Accepted  
> **Author:** PawSitive Care Team  
> **Created:** 2026-03-24  
> **Last Updated:** 2026-03-24

---

## 1. Overview

This document defines the design system for PawSitive Care Vet — a veterinary clinic web application built with React 19, TypeScript, Vite, and Tailwind CSS v4. It serves as the single source of truth for visual language, component patterns, and interaction guidelines.

The design system aims to convey **trust, warmth, and professionalism** — qualities pet owners look for when choosing veterinary care.

---

## 2. Design Principles

| Principle                   | Description                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Compassion First**        | Every visual choice should feel warm and approachable. Rounded corners, soft shadows, and a caring color palette reinforce the clinic's mission. |
| **Clarity Over Cleverness** | Interfaces must be immediately understandable. Pet owners in stressful situations (emergency care, appointment booking) need clear affordances.  |
| **Consistency**             | Reuse tokens and components. A button should look and behave the same everywhere.                                                                |
| **Accessibility**           | Meet WCAG 2.1 AA. Ensure sufficient contrast ratios, keyboard navigation, and screen-reader support.                                             |
| **Responsive by Default**   | Every component must work across mobile, tablet, and desktop without dedicated "mobile versions."                                                |

---

## 3. Design Tokens

All tokens are defined in `src/index.css` inside the Tailwind `@theme` block and are available as CSS custom properties and Tailwind utility classes.

### 3.1 Color Palette

#### Brand Colors

| Token                     | Value     | Tailwind Class                                 | Usage                                                       |
| ------------------------- | --------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `--color-primary`         | `#480ca8` | `text-primary`, `bg-primary`, `border-primary` | Primary actions, headings, navbar, auth card gradients      |
| `--color-primary-variant` | `#4cc9f0` | `text-primary-variant`, `bg-primary-variant`   | Gradient endpoints, accent highlights, body background tint |
| `--color-secondary`       | `#d68a38` | `text-secondary`, `bg-secondary`               | CTA buttons, interactive accents, nav hover states          |

#### Neutral Colors

| Token           | Value                      | Tailwind Class           | Usage                             |
| --------------- | -------------------------- | ------------------------ | --------------------------------- |
| `--color-black` | `#0c031b`                  | `text-black`, `bg-black` | Headings, high-emphasis text      |
| `--color-dark`  | `rgba(12, 3, 27, 0.7)`     | `text-dark`, `bg-dark`   | Body copy, secondary text         |
| `--color-light` | `rgba(255, 255, 255, 0.7)` | `text-light`, `bg-light` | Text on dark/gradient backgrounds |

#### Semantic Colors

| Token             | Value     | Tailwind Class               | Usage                         |
| ----------------- | --------- | ---------------------------- | ----------------------------- |
| `--color-success` | `#54eb72` | `text-success`, `bg-success` | Success states, confirmations |

#### Extended Palette (hard-coded, candidates for tokenization)

| Value                     | Context                       | Recommendation                       |
| ------------------------- | ----------------------------- | ------------------------------------ |
| `#e09a4e`                 | `.btn` hover state            | Extract as `--color-secondary-hover` |
| `#5a1ec0`                 | `.btn-primary` hover state    | Extract as `--color-primary-hover`   |
| `rgba(76, 201, 240, 0.1)` | Body background               | Extract as `--color-bg-base`         |
| `rgb(173, 154, 119)`      | Nav link hover gradient start | Extract as `--color-nav-hover-start` |
| `lightsalmon`             | Nav link hover gradient end   | Extract as `--color-nav-hover-end`   |

#### Dark Mode

Dark mode is toggled via a `dark-theme` class on `<body>`, managed by `DarkModeContext`.

| Property   | Light                     | Dark      |
| ---------- | ------------------------- | --------- |
| Background | `rgba(76, 201, 240, 0.1)` | `#000000` |
| Text       | `rgba(12, 3, 27, 0.7)`    | `#ffffff` |

### 3.2 Typography

#### Font Family

| Token         | Value                      | Weights Loaded                                                       |
| ------------- | -------------------------- | -------------------------------------------------------------------- |
| `--font-sans` | `"Montserrat", sans-serif` | 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold) |

The font is imported via Google Fonts in `src/index.css`.

#### Type Scale

| Role       | Size       | Weight | Line Height | Usage                      |
| ---------- | ---------- | ------ | ----------- | -------------------------- |
| Display    | `3.5rem`   | 700    | 1.2         | Hero/banner headline       |
| Heading 1  | `2.5rem`   | 700    | 1.2         | Section titles on banner   |
| Heading 2  | `2rem`     | 600    | 1.2         | Section headings           |
| Heading 3  | `1.5rem`   | 600    | 1.2         | Card titles, sub-sections  |
| Body Large | `1.3rem`   | 400    | 1.5         | Card info text             |
| Body       | `1.125rem` | 400    | 1.5         | Input fields, general copy |
| Body Small | `1rem`     | 400    | 1.5         | Default body text          |
| Caption    | `0.875rem` | 300    | 1.5         | Fine print, metadata       |

### 3.3 Spacing

The app follows Tailwind's default spacing scale (multiples of `0.25rem`). Key recurring values:

| Token               | Value          | Usage                        |
| ------------------- | -------------- | ---------------------------- |
| `section-gap`       | `6rem`         | Top margin between sections  |
| `card-padding`      | `0.75rem`      | Auth card container padding  |
| `card-form-padding` | `2rem 1rem`    | Form area inside cards       |
| `btn-padding`       | `0.75rem 1rem` | Button padding               |
| `input-gap`         | `1.5rem`       | Space between stacked inputs |

### 3.4 Border Radius

| Usage             | Value     |
| ----------------- | --------- |
| Buttons           | `8px`     |
| Cards             | `10px`    |
| Specialist images | `1rem`    |
| Burger menu lines | `0.25rem` |
| Nav links         | `8px`     |

### 3.5 Shadows

| Name         | Value                                     | Usage                           |
| ------------ | ----------------------------------------- | ------------------------------- |
| Button hover | `0 1rem 1.6rem rgba(12, 3, 27, 0.15)`     | `.btn` and `.btn-primary` hover |
| Card         | `0 10px 20px 0 rgba(153, 153, 153, 0.25)` | Auth card resting state         |

### 3.6 Transitions

| Duration | Easing        | Usage                                               |
| -------- | ------------- | --------------------------------------------------- |
| `400ms`  | `ease`        | Button background/shadow transitions                |
| `500ms`  | `ease`        | Hover shadow link animation, burger menu transforms |
| `250ms`  | `ease`        | Floating label movement                             |
| `1000ms` | `ease`        | Specialist card overlay slide                       |
| `500ms`  | `ease-in-out` | Nav/burger gradient hover                           |
| `2050ms` | `ease-in-out` | Paw print animation (infinite)                      |

### 3.7 Breakpoints

| Token             | Value    | Target                           |
| ----------------- | -------- | -------------------------------- |
| `--breakpoint-sm` | `600px`  | Mobile landscape / small tablets |
| `--breakpoint-md` | `768px`  | Tablets                          |
| `--breakpoint-lg` | `1024px` | Desktop                          |

Tailwind utility prefixes: `sm:`, `md:`, `lg:` and their `max-*:` counterparts.

---

## 4. Gradients

Gradients are a core visual motif, linking the brand's primary and variant colors.

| Name                   | Value                                                                         | Usage                                          |
| ---------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| **Brand Gradient**     | `linear-gradient(135deg, var(--color-primary), var(--color-primary-variant))` | `.gradient-bg`, auth cards, specialist overlay |
| **Nav Hover Gradient** | `linear-gradient(to right, rgb(173, 154, 119) 0%, lightsalmon 100%)`          | Nav link and burger menu hover states          |

---

## 5. Component Library

### 5.1 Buttons

Two button variants, defined as `@layer components` classes:

#### `.btn` — Secondary / CTA

```
background: var(--color-secondary)
color: #ffffff
padding: 0.75rem 1rem
border-radius: 8px
hover → background: #e09a4e + box-shadow
```

#### `.btn-primary` — Primary Action

```
background: var(--color-primary)
color: #ffffff
padding: 0.75rem 1rem
border-radius: 8px
hover → background: #5a1ec0 + box-shadow
```

**Guidelines:**

- Use `.btn` for general CTAs (book appointment, learn more).
- Use `.btn-primary` for high-priority actions (sign in, submit form).
- Buttons always use `display: inline-block; width: fit-content`.

### 5.2 Input (Floating Label)

A custom floating-label input built with CSS (`.input`, `.input-field`, `.input-label`):

- Labels are positioned absolutely and animate upward on focus/valid.
- Border-bottom style (2px solid `#eee`, transitions to `rgba(255, 255, 255, 0.7)` on focus).
- Designed for use on gradient backgrounds (white text).

### 5.3 Card (Auth)

The `.card` component wraps authentication forms:

- Uses the brand gradient background.
- Max-width scales responsively: `fit-content` → `30rem` (sm) → `40rem` (lg).
- Contains `.card-form`, `.card-form-title`, `.card-info`, and `.action` sub-classes.

### 5.4 Banner

The hero section with:

- Full-width gradient background.
- Large display text (`text-[2.5rem]`+).
- Animated paw print SVGs (staggered fade animation at `2050ms`).
- Two-column grid layout (`grid-cols-[46%_46%]`), collapsing to single column on mobile.

### 5.5 Services

A grid of service cards using the `hover-color` utility for interactive gradient reveal on hover.

### 5.6 Specialists

Cards with image overlay effect:

- `.specialist-image::before` — gradient overlay slides in from left on group hover.
- Social media links revealed on hover.
- `1rem` border-radius with `overflow: hidden`.

### 5.7 Testimonials

- **Swiper** carousel with pagination bullets.
- Bullet color overridden to `var(--color-primary)`.
- Responsive slides-per-view configuration.

### 5.8 FAQ

Expandable accordion sections. Toggle driven by React state with icon rotation.

### 5.9 Map

- **Leaflet** + **react-leaflet** embedded map.
- Container: `width: 100%; height: 50vh`, shrinks to `50vh × 50vh` below `1100px`.
- `z-index: 2` to sit above section backgrounds.

### 5.10 Navbar

Two variants swapped via viewport width check (`768px` threshold):

- **BigNavbar** — horizontal nav links with `.nav-link-hover` gradient effect.
- **BurgerButton** — animated three-line hamburger icon (CSS transforms on `.burger-line`).

### 5.11 Footer

Multi-column grid layout with Boxicons for social links and contact info.

### 5.12 OAuth

A social sign-in button (Google) using the shared `.btn` style. Integrates with Supabase Auth.

### 5.13 Toggle Theme

Dark mode switch component. Toggles `dark-theme` class on `<body>` via `DarkModeContext`.

---

## 6. Iconography

Two icon systems are in use:

| Library         | Method                              | Usage                                                           |
| --------------- | ----------------------------------- | --------------------------------------------------------------- |
| **react-icons** | JSX components (`<FaIcon />`)       | FAQ, testimonials, services, navbar, appointments, theme toggle |
| **Boxicons**    | CSS class names (`bx bx-*`) via CDN | Footer, contact, specialists, feature data                      |

**Recommendation:** Consolidate to a single icon system (react-icons preferred) to reduce CDN dependencies and improve tree-shaking.

---

## 7. Animation & Motion

| Animation          | Trigger            | Duration             | Details                                                                          |
| ------------------ | ------------------ | -------------------- | -------------------------------------------------------------------------------- |
| Paw prints         | On load (infinite) | `2050ms` ease-in-out | Staggered opacity fade with `animation-delay` per paw                            |
| Specialist overlay | Group hover        | `1s` ease            | `::before` pseudo-element slides from `left: -100%` to `0`, border-radius morphs |
| Burger icon        | Click toggle       | `500ms`              | Line rotation/fade transforms                                                    |
| Nav hover gradient | Hover              | `500ms` ease-in-out  | Background-position sweep                                                        |
| Floating labels    | Focus/valid        | `250ms` ease         | TranslateY + color change                                                        |
| Hover shadow links | Hover              | `500ms`              | Font-weight + letter-spacing with staggered delays per `<span>`                  |
| Buttons            | Hover              | `400ms` ease         | Background color + box-shadow                                                    |

---

## 8. Layout Architecture

### Page Structure

```
<HomeLayout>
  <Navbar />          ← fixed/sticky, gradient background
  <Outlet />          ← page content (react-router)
  <Footer />          ← multi-column grid
</HomeLayout>
```

### Grid System

The app uses Tailwind's grid utilities with explicit column templates:

- **Banner:** `grid-cols-[46% 46%]` → single column on mobile.
- **Provide/Services:** `grid-cols-3` → `grid-cols-2` → `grid-cols-1` at breakpoints.
- **Specialists:** `grid-cols-4` → collapses responsively.
- **Footer:** Multi-column grid, stacking on small screens.

### Section Rhythm

Every `<section>` has `margin-top: 6rem` with centered `h2` and `p` (width: 42% → 55% → 90%).

---

## 9. Accessibility Considerations

| Area                | Current State                             | Recommendation                                                               |
| ------------------- | ----------------------------------------- | ---------------------------------------------------------------------------- |
| Color contrast      | Primary on white may be borderline        | Audit with WCAG contrast checker; `#480ca8` on white = 7.2:1 (passes AA/AAA) |
| Dark mode contrast  | White on black                            | Passes, but gradient backgrounds need review                                 |
| Keyboard navigation | Basic browser defaults                    | Add visible focus rings to interactive elements                              |
| Form labels         | Floating labels use `:valid` pseudo-class | Add `aria-label` attributes for screen readers                               |
| Alt text            | Images use `display: block` globally      | Ensure all `<img>` tags carry meaningful `alt` attributes                    |
| Reduced motion      | Not implemented                           | Add `@media (prefers-reduced-motion: reduce)` to disable animations          |

---

## 10. File Organization

```
src/
├── index.css              ← Design tokens, base/component layers, custom CSS
├── components/
│   ├── banner/            ← Hero section
│   ├── button/            ← Reusable button
│   ├── input/             ← Floating label input
│   ├── faq/               ← Accordion
│   ├── map/               ← Leaflet map
│   ├── provide/           ← Feature grid
│   ├── services/          ← Service cards
│   ├── specialists/       ← Team cards
│   ├── testimonials/      ← Swiper carousel
│   ├── auth/              ← OAuth button
│   └── protectedRoute/    ← Auth guard
├── UI/
│   ├── navbar/            ← BigNavbar + BurgerButton
│   └── footer/            ← Site footer
├── pages/                 ← Route-level components
├── contexts/              ← DarkMode + UserAuth providers
├── dark-mode/             ← Theme toggle component
├── interfaces/            ← TypeScript type definitions
└── utils/data/            ← Static content and copy
```

---

## 11. Future Recommendations

### Short-Term

1. **Tokenize all hard-coded colors** — Extract hover states, nav gradients, and background tints into `@theme` variables.
2. **Consolidate icon libraries** — Migrate Boxicons usage to react-icons to remove the CDN dependency.
3. **Add focus-visible styles** — Provide visible focus rings for keyboard users on all interactive elements.
4. **Add `prefers-reduced-motion`** — Wrap paw animation, specialist overlay, and hover effects in a reduced-motion media query.

### Medium-Term

5. **Extract a component library** — Move reusable components (Button, Input, Card) into a shared library with Storybook documentation.
6. **Introduce a spacing scale token set** — Replace ad-hoc `rem` values with named spacing tokens.
7. **Add a proper type scale** — Define named font-size tokens (`--text-display`, `--text-h1`, etc.) in `@theme`.
8. **Dark mode token layer** — Replace the monolithic `.dark-theme` override with per-token dark values using CSS custom properties.

### Long-Term

9. **Design token pipeline** — Adopt a tool like Style Dictionary to generate tokens for CSS, TypeScript, and potential native apps.
10. **Component testing** — Add visual regression tests via Storybook + Chromatic or Playwright screenshots.
11. **Theming system** — Support multiple themes beyond light/dark (e.g., high-contrast mode) via CSS custom property layers.

---

## 12. Glossary

| Term                    | Definition                                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Design Token**        | A named value (color, spacing, font) that serves as the atomic unit of the design system                   |
| **Tailwind `@theme`**   | Tailwind CSS v4's mechanism for defining custom design tokens as CSS custom properties                     |
| **`@layer components`** | Tailwind's CSS layer for reusable component classes that participate in the utility cascade                |
| **Gradient Background** | The diagonal linear gradient from `--color-primary` to `--color-primary-variant`, a recurring visual motif |
