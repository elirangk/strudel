import { useScrolledPast } from '@/hooks'
import { PRICE, type Lang } from '@/i18n/copy'
import { useI18n } from '@/i18n/language'
import { cn } from '@/lib/utils'
import { BuyLink } from './BuyLink'
import { LogoMark } from './Logo'

function LanguageToggle() {
  const { lang, setLang, t } = useI18n()
  const options: { value: Lang; label: string; short: string }[] = [
    { value: 'he', label: t.langSwitch.he, short: 'עב' },
    { value: 'en', label: t.langSwitch.en, short: 'EN' },
    { value: 'fr', label: t.langSwitch.fr, short: 'FR' },
  ]
  return (
    <div
      role="group"
      aria-label={t.langSwitch.label}
      className="flex items-center rounded-full border border-sand-deep/80 bg-sand/80 p-1"
    >
      {options.map((opt) => {
        const active = lang === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            lang={opt.value}
            aria-pressed={active}
            aria-label={opt.label}
            title={opt.label}
            onClick={() => setLang(opt.value)}
            className={cn(
              'h-8 min-w-10 rounded-full px-2 text-[0.8125rem] font-bold transition-all duration-200 focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none sm:min-w-11 sm:px-2.5',
              active ? 'bg-white text-cocoa shadow-sm' : 'text-cocoa-muted hover:text-cocoa',
            )}
          >
            {opt.short}
          </button>
        )
      })}
    </div>
  )
}

export function Header() {
  const { t, price } = useI18n()
  const scrolled = useScrolledPast(8)

  const links = [
    { href: '#demo', label: t.nav.demo },
    { href: '#features', label: t.nav.features },
    { href: '#order', label: t.nav.order },
    { href: '#faq', label: t.nav.faq },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-300',
        scrolled
          ? 'border-b border-sand-deep/60 bg-cream/85 shadow-[0_8px_30px_-20px_rgb(43_33_25/0.25)] backdrop-blur-lg'
          : 'border-b border-transparent bg-cream/0',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#top" className="group flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none">
          <LogoMark className="transition-transform duration-300 group-hover:-rotate-6" />
          <span className="truncate font-display text-[1.0625rem] font-bold tracking-tight text-cocoa max-sm:sr-only sm:text-lg">
            {t.brand}
          </span>
        </a>

        <nav aria-label="Main" className="ms-6 hidden items-center gap-1 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[0.9375rem] font-semibold text-cocoa-muted transition-colors hover:bg-sand/70 hover:text-cocoa"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <BuyLink className="h-10 rounded-full bg-cocoa px-4 text-sm font-bold text-white hover:bg-terracotta sm:px-5">
            <span className="sm:hidden">{t.cta.orderShort}</span>
            <span className="hidden sm:inline">{t.cta.orderFor(price(PRICE))}</span>
          </BuyLink>
        </div>
      </div>
    </header>
  )
}
