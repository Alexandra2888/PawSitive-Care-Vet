# PawSitive Care Vet

A modern veterinary clinic web application for appointment booking, specialist browsing, and pet healthcare services.

**Live:** [paw-sitive-care-vet.vercel.app](https://paw-sitive-care-vet.vercel.app/)

<img src="https://github.com/Alexandra2888/PawSitive-Care-Vet/blob/main/pawsitive.jpeg" alt="PawSitive Care Vet — homepage preview"/>

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build:** Vite 6
- **Styling:** Tailwind CSS v4 (theme tokens in `src/index.css`)
- **Routing:** React Router v6
- **Backend:** Supabase (auth + database)
- **Maps:** Leaflet + react-leaflet
- **Carousel:** Swiper
- **Icons:** react-icons + Boxicons (CDN)
- **E2E Testing:** Playwright

## Features

- Landing page with hero banner, services, specialists, testimonials, FAQ, and contact map
- User authentication (email/password + Google OAuth via Supabase)
- Protected appointment booking and management
- Dark mode toggle
- Responsive design (mobile, tablet, desktop)

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- A Supabase project (for auth and data)

### Installation

```bash
git clone https://github.com/Alexandra2888/PawSitive-Care-Vet.git
cd PawSitive-Care-Vet
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development

```bash
npm run dev
```

Runs at [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
```

Outputs optimized files to `dist/`.

## Testing

### E2E Tests (Playwright)

The project includes a comprehensive Playwright end-to-end test suite that runs against the Vite dev server with all Supabase calls mocked at the network level — no external services required.

```bash
# Run all e2e tests
npm run test:e2e

# Run a specific spec
npx playwright test e2e/home.spec.ts

# Run in headed mode (visible browser)
npx playwright test --headed

# View the HTML report
npx playwright show-report
```

**Test suites:**

| Spec                       | Coverage                                                        |
| -------------------------- | --------------------------------------------------------------- |
| `home.spec.ts`             | Banner, services, specialists, testimonials, map, FAQ accordion |
| `auth.spec.ts`             | Sign in, sign up, forgot password, OAuth button                 |
| `navigation.spec.ts`       | Desktop navbar, mobile burger menu                              |
| `dark-mode.spec.ts`        | Theme toggle and localStorage persistence                       |
| `not-found.spec.ts`        | 404 page and navigation back to home                            |
| `protected-routes.spec.ts` | Auth guards, appointment form, appointments list                |

## Project Structure

```
src/
├── components/        # Reusable UI components (Banner, Button, Input, FAQ, etc.)
├── UI/                # Layout chrome (Navbar, Footer)
├── pages/             # Route-level page components
├── contexts/          # React contexts (DarkMode, UserAuth)
├── dark-mode/         # Theme toggle component
├── interfaces/        # TypeScript type definitions
├── utils/data/        # Static content and copy
└── index.css          # Design tokens, base styles, component classes

e2e/
├── helpers.ts         # Shared Supabase mocks and auth fixtures
├── home.spec.ts       # Home page sections
├── auth.spec.ts       # Authentication flows
├── navigation.spec.ts # Desktop and mobile navigation
├── dark-mode.spec.ts  # Theme toggle
├── not-found.spec.ts  # 404 page
└── protected-routes.spec.ts  # Auth guards and appointments
```

## Design System

The full design system is documented in [`doc/rfc.md`](doc/rfc.md). It covers:

- Design principles and visual language
- Color palette and design tokens
- Typography scale (Montserrat, 300–700)
- Component specifications (buttons, cards, inputs, etc.)
- Layout architecture and breakpoints
- Animation and motion guidelines
- Accessibility considerations
- Future roadmap

All design tokens are centralized in `src/index.css` via Tailwind v4's `@theme` block.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b my-feature-branch`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to your fork: `git push origin my-feature-branch`
5. Open a pull request to the main repository
