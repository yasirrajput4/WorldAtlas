# WorldAtlas

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-success?style=for-the-badge&logo=vercel)](https://worldatlas-yasir.vercel.app)

A React country-explorer app — search, filter, and sort through 195+ nations, and drill into a detailed profile for each one. Built on the [REST Countries v5 API](https://restcountries.com/docs) and styled with Tailwind CSS.

---

## What I Learned in This Project

1. **React Router DOM (Page Navigation)**:
   - How to set up a data router with `createBrowserRouter` and `<RouterProvider />`, with nested `children` routes.
   - How to pass dynamic values in the URL using `useParams` (e.g., `/country/:id` to load a single country's details), and how to safely encode dynamic segments with `encodeURIComponent` so country names containing spaces or special characters (e.g. "United States", "Côte d'Ivoire") don't break the route or the API call.
   - How to create a shared layout with nested pages using `<Outlet />` — the header and footer stay mounted while `AppLayout` swaps out the page content (Home, About, Country, Contact) inside it.
   - How to build "Read More" and "Go Back" navigation using `<NavLink />`, including styling the active link differently from inactive ones.
   - How to show a friendly error screen (`errorElement` + `useRouteError`) when a route fails or doesn't match.

2. **Fetching Data with Axios + TanStack Query**:
   - How to create a reusable Axios instance (`axios.create`) with a `baseURL` and a shared `Authorization` header, instead of repeating config on every call.
   - How to call a third-party REST API (REST Countries v5) with query params (`response_fields`, `limit`) for both a list endpoint and a "read by property" endpoint (`/names.common/:name`) for a single country.
   - How to unwrap a nested JSON:API-style response (`res.data.data.objects`) safely.
   - How to replace manual `useEffect` + `useState` + `useTransition` data fetching with **TanStack Query** (`useQuery`) — getting caching, request de-duplication, and `isPending`/`error`/`data` states for free.
   - How to set up a single `QueryClient`/`QueryClientProvider` at the app's entry point, and tune sane defaults (`retry: 1`, `refetchOnWindowFocus: false`) for a mostly-static dataset like country data.
   - Why server data returned by `useQuery` shouldn't be copied into a separate local `useState` ("mirroring") — doing so caused a visible flash of the empty state on route re-entry and reset any applied sort whenever a background refetch happened. UI-only concerns (like sort order) are now kept in their own small state and combined with the query's cached data using `useMemo`, so the cache stays the single source of truth.
   - Why hooks like `useMemo` must always run before any early `return` (e.g. the loading/error checks) — moving it after caused a "Rendered more hooks than during the previous render" crash.

3. **Handling Loading, Error, and Empty States**:
   - How to read `isPending` and `error` straight off `useQuery` and show a spinner or a fallback message accordingly, without manual `try/catch` or `finally` bookkeeping.
   - How to avoid rendering a thrown `Error` object directly in JSX (React can't render objects as children) — showing a friendly static message instead.
   - How to use optional chaining (`?.`) and fallback values (`|| "N/A"`) to safely render fields that some countries don't have (missing capital, currency, or flag).

4. **Derived State & Client-Side Filtering**:
   - How to implement live search, region filtering, and A–Z/Z–A sorting on a list purely by **deriving** it from cached query data with `useMemo` and array methods (`.filter`, `.sort`, `.localeCompare`) — no extra API calls, and no duplicate copies of the list needed.
   - How to combine multiple independent filters (search text + region dropdown + sort order) by chaining filter conditions inside a single memoized computation.

5. **Component Composition & Reusability**:
   - How to break a page into small, focused components (`CountryCard`, `SearchFilter`, `Loader`, `Headers`, `Footers`) that each take props and render one piece of UI.
   - How to keep a single component (`CountryCard`) reusable across a dynamic list rendered with `.map()`.

---

## Features

- **Home page** with a hero section and a curated "Interesting Facts" showcase of countries.
- **Country directory** listing every country with flag, population, region, and capital at a glance.
- **Live search** — filter the country list by name as you type.
- **Region filter** — narrow the list down to Africa, Americas, Asia, Europe, or Oceania.
- **A–Z / Z–A sorting** — sort the country list alphabetically in either direction.
- **Country details page** — official name, native names, population, region/sub-region, capital(s), top-level domain, currencies, and languages for a single country.
- **Graceful handling of incomplete data** — countries missing a capital, flag, or currency (e.g. some territories) render "N/A" instead of crashing.
- **Cached, resilient data fetching** — powered by TanStack Query, with automatic loading/error states and a single retry on failure.
- **Contact page** with a simple validated form.
- **Responsive navigation** — collapses into a hamburger drawer menu on mobile.
- **Loading and error states** — a spinner while data is in flight, and friendly fallback messaging if a request fails.
- **Fully responsive layout** — mobile-first grid/flex layouts across every page.

---

## Tech Stack

| Layer         | Tool                                                    |
| ------------- | ------------------------------------------------------- |
| Framework     | React 19                                                |
| Routing       | React Router 7 (data router)                            |
| Data fetching | TanStack Query 5 + Axios                                |
| Styling       | Tailwind CSS 4                                          |
| Icons         | react-icons                                             |
| Build tool    | Vite                                                    |
| Data source   | [REST Countries v5 API](https://restcountries.com/docs) |
| Deployment    | Vercel                                                  |

---
