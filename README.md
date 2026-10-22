# Community — Mobile

React Native mobile app (Expo) for **Community**.

> **Canonical Expo SDK 53 template.** This repo is the canonical Expo SDK 53 /
> Expo Router (TypeScript) template in `bookchaowalit-mobile`. The other Expo
> SDK 53 repos in the org are name-substituted copies of it (for example
> `ai-translation-mobile`, `marketing-url-shortener-mobile`,
> `ai-art-gallery-mobile`, `ai-chat-playground-mobile`,
> `community-announcements-mobile`, `community-challenges-mobile`,
> `community-collaborations-mobile`, `content-artblog-mobile`,
> `community-comments-mobile`, `content-wiki-mobile`, `devtools-changelog-mobile`
> and the rest of the `expo-sdk-53` stack). Each copy owns its code (no shared
> package); consolidation/archive of the copies is pending owner decision D5
> (BD-033) per `repository-catalog/portfolio/MOBILE-CONSOLIDATION-2026-10.md` in
> solo-empire. See [PRODUCT.md](PRODUCT.md) for what the app actually does.

Part of [Chaowalit Greepoke](https://bookchaowalit.com)'s 101 Portfolio Projects.

## Features

- **Community feed** (Feed tab): start a discussion with tags, up/down-vote posts
  (tap again to clear), sort by *hot* (score with time decay), *new* or *top*,
  filter by tag and search by title/author. Posts and this device's votes are
  saved on the device with AsyncStorage (no backend, no account).
- Feed logic lives in `lib/community.ts` (pure TypeScript, unit-tested).

## Tech Stack

- **Framework:** Expo SDK 53 + Expo Router
- **Language:** TypeScript (`strict`)
- **Tests:** Vitest 4 (+ `@vitest/coverage-v8`; coverage counts every file in `app/` and `lib/`)
- **Navigation:** Expo Router (file-based)
- **UI:** React Native + Ionicons

## Getting Started

```bash
npm install
npx expo start
```

## Scripts

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # expo lint (eslint-config-expo)
npm test            # vitest unit tests for lib/
npx expo export --platform android --output-dir dist   # JS bundle smoke check
```

CI (`.github/workflows/ci.yml`) calls the shared
`bookchaowalit/platform-ci-workflows` `ci-node.yml` and `security.yml` (v1.1.1,
SHA-pinned): `npm ci`, lint, typecheck, vitest with a line-coverage gate
(whole project incl. untested screens; ratchet it up as tests are added), the
Android JS bundle export above, plus Gitleaks, Semgrep, OSV-Scanner and Trivy.
Nothing is masked with `|| true`. There is no EAS / Expo cloud build in CI:
that needs an owner-linked Expo account (owner action).

## Build (manual, needs an Expo account linked with `eas init`)

```bash
# Android
npx eas build --platform android --profile preview

# iOS
npx eas build --platform ios --profile preview
```

## Related

- **Frontend:** [bookchaowalit-website/community-frontend](https://github.com/bookchaowalit-website/community-frontend)
- **Portfolio:** [bookchaowalit.com](https://bookchaowalit.com)

## License

MIT
