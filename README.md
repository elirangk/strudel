# Strudel — sales landing page

A one-page sales site for **Strudel**, a family recipe tablet: a distraction-free cooking screen that turns into a living family photo frame. The page walks through an interactive demo of the tablet, the benefits, what's in the box, pricing and an FAQ, with every buy button leading to a PayBox payment link.

The page is trilingual. Hebrew is the default (RTL), with English and French (LTR). The header toggle (עב / EN / FR) flips the text direction and remembers the choice in `localStorage` (`kt-lang`).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 and shadcn/ui primitives (accordion)
- Self-hosted Assistant and Heebo fonts (`@fontsource`), with Hebrew and Latin coverage

## Run locally

```bash
npm install
npm run dev      # http://localhost:5747 (bound to 0.0.0.0)
```

Other scripts:

```bash
npm run build    # type-check and build to dist/
npm run preview  # serve the production build on port 5747
npm run lint
```

## Where things live

- `src/i18n/copy.ts`: all page copy in Hebrew, English and French, plus the price constants (`PRICE`, `LIST_PRICE`)
- `src/i18n/language.tsx`: language provider (sets `lang`/`dir` on `<html>` and persists the choice)
- `src/components/`: page sections (`Hero`, `TabletDemo`, `TrustBar`, `Features`, `Order`, `Faq`, `FinalCta`, `Footer`, `FloatingBuy`, `BuyLink`)
- `src/assets/`: photography and the Strudel logo badge

## Checkout

Every buy button (header, hero, price box, closing banner, floating bar) opens the PayBox payment link in a new tab. The link and prices are set in `src/i18n/copy.ts` (`PAYBOX_URL`, `PRICE` = ₪649, `LIST_PRICE` = ₪990).

## Placeholders to replace before launch

- **Photos** are generated stand-ins, not product shots.
