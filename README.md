# Dapp Auth Template – Privy-powered auth starter for EVM dapps

> Live site: (to be added)

## Features

- **Privy authentication** with Google, GitHub, Email, and Wallet methods out of the box
- **Middleware route guard** using `privy_token` cookie (public: `/`, `/login`)
- **Base Sepolia** as the default chain via `viem` (easy to customize)
- **Next.js 15 / React 19 / TypeScript** with Turbopack dev/build scripts
- **Tailwind CSS v4** and **shadcn/ui** components with the “new-york” style
- **Clean component structure**: sidebar, user menu, login form, and skeletons

## Tech Stack

- Next.js 15.5, React 19
- TypeScript 5, ESLint 9
- Tailwind CSS v4, shadcn/ui, lucide-react, react-icons
- Privy (`@privy-io/react-auth`), viem

## Directory Structure

```
src/
  app/
    dashboard/
      page.tsx          # Dashboard with sidebar and layout
    login/
      page.tsx          # Login page using LoginForm
    layout.tsx          # Root layout and fonts
    provider.tsx        # Privy Provider wrapper
    globals.css
    page.tsx            # Home page
  components/
    app-sidebar.tsx
    nav-user.tsx
    login-form.tsx
    login-skeleton.tsx
    copy.tsx
    ui/                 # shadcn/ui components (generated)
  hooks/
    use-mobile.ts
  lib/
    privyConfig.ts      # Central Privy config + chains
    utils.ts            # UI utils (cn, truncateAddress)
  middleware.ts         # Route guard for auth
```

## Routes

- `/` – Home
- `/login` – Login screen with buttons for Google, GitHub, Email, Wallet
- `/dashboard` – Protected screen (requires `privy_token` cookie). If not present, middleware redirects to `/login`.

## Authentication Flow

- The Privy provider is configured in `src/app/provider.tsx` using `NEXT_PUBLIC_PRIVY_APP_ID` and `privyConfig` from `src/lib/privyConfig.ts`.
- On successful authentication, the user is redirected to `/dashboard`.
- `src/middleware.ts` treats `/` and `/login` as public, and redirects any other path to `/login` unless a `privy_token` cookie is present.
- Supported login methods in the UI are Google, GitHub, Email, and Wallet. For all possible methods and setup details, see Privy’s docs at https://www.privy.io.

## Chain Configuration

- Default chain is Base Sepolia via `viem/chains`.
- To change or add chains, edit `src/lib/privyConfig.ts`:

```ts
import type { PrivyClientConfig } from "@privy-io/react-auth"
import { baseSepolia } from "viem/chains"

export const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    ethereum: { createOnLogin: "users-without-wallets" },
  },
  defaultChain: baseSepolia,
  supportedChains: [baseSepolia],
  loginMethods: ["email", "google", "github", "wallet"],
  appearance: {
    accentColor: "#38CCCD",
    theme: "light",
    landingHeader: "Dapp-Auth",
    walletChainType: "ethereum-only",
    walletList: ["detected_wallets"],
  },
}
```

## Getting Started

### Prerequisites

- Node 18.18+ or 20+
- npm, pnpm, or yarn

### Install

```bash
npm install
# or
pnpm install
# or
yarn
```

### Environment variables

Copy `env.example` to `.env.local` and fill in your values:

```bash
cp env.example .env.local
```

Required:

- `NEXT_PUBLIC_PRIVY_APP_ID` – Your Privy App ID (client-side)

Optional:

- `NEXT_PUBLIC_APP_URL` – Public app URL (used in metadata); defaults to `http://localhost:3000` if not set

### Run

```bash
npm run dev
```

Open http://localhost:3000

### Build & Start

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Notes

- The UI components under `src/components/ui/` are generated from shadcn/ui and can be customized or extended. This folder is intentionally excluded from code refactors.
- This template uses Turbopack for `dev` and `build` scripts.

## Contributing

Issues and PRs are welcome. Please open an issue to suggest improvements or report bugs.

## License

This project is open source and available under the [MIT License](./LICENSE).
