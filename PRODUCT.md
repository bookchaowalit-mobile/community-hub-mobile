# PRODUCT — Community (mobile)

Status: portfolio demo and the **canonical Expo SDK 53 / Expo Router template**
for `bookchaowalit-mobile`. Not published to the App Store or Google Play.

## What it is

A single-device discussion feed built with Expo SDK 53, Expo Router and
TypeScript (`strict`). It shows how the template is meant to be used: pure,
unit-tested logic in `lib/`, thin screens in `app/`, versioned local storage.

## Screens (what exists today)

| Tab | File | What it does |
|---|---|---|
| Feed | `app/(tabs)/index.tsx` | Start a discussion (title + comma-separated tags, validated), up/down-vote posts (tap again to clear), sort by hot / new / top, filter by tag chip, search by title or author. Starts from 4 bundled seed posts. |
| Explore | `app/(tabs)/explore.tsx` | Placeholder screen ("Explore content will be added here"). |
| Profile | `app/(tabs)/profile.tsx` | Static author card with links to bookchaowalit.com and github.com/bookchaowalit. |

`app/index.tsx` redirects to the tabs.

## Data

- Seed posts are bundled in the app. New posts and this device's votes are saved
  on the device with AsyncStorage (`lib/usePersistentState.ts`) inside a
  versioned `{ v, data }` envelope (`lib/persist.ts`); corrupt or old data falls
  back to the seed instead of crashing.
- No backend, no accounts, no sync between devices, no analytics. Every new post
  is authored as "you".

## Quality

- Feed logic (`lib/community.ts`) and storage helpers (`lib/persist.ts`) are
  covered by Vitest tests in `lib/__tests__/` (3 files).
- Screens and `usePersistentState` have no component tests yet; the CI coverage
  gate measures the whole project, so it is low and should be ratcheted up.
- CI: shared `ci-node.yml` (lint, typecheck, tests + coverage gate, Android JS
  bundle export) and `security.yml`, fail-closed.

## Not included (owner actions / backlog)

- No EAS / store builds: linking an Expo account (`eas init`) and any store
  listing are owner actions.
- Backlog: see `docs/UPGRADE-PLAN.md` (post detail with comments, component
  tests, real identity, moderation).
