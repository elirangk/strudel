import { ArrowRight, Check } from 'lucide-react'
import { LIST_PRICE, PRICE } from '@/i18n/copy'
import { useI18n } from '@/i18n/language'
import { BuyLink } from './BuyLink'
import { TabletDemo } from './TabletDemo'

export function Hero() {
  const { t, price } = useI18n()

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 start-[-10%] size-[36rem] rounded-full bg-terracotta-light/70 blur-3xl" />
        <div className="absolute top-1/3 end-[-12%] size-[32rem] rounded-full bg-honey-light/80 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 xl:gap-16">
        <div className="mx-auto max-w-xl text-center lg:col-span-5 lg:mx-0 lg:max-w-none lg:text-start">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-terracotta/15 bg-white/70 px-3.5 py-1.5 text-xs font-bold text-terracotta shadow-sm backdrop-blur sm:text-sm">
            <span className="size-2 rounded-full bg-terracotta animate-pulse-soft" aria-hidden="true" />
            {t.hero.badge}
          </div>

          <h1 className="font-display text-[2.5rem] leading-[1.08] font-black tracking-tight text-cocoa text-balance sm:text-[3.5rem] lg:text-[3.25rem] xl:text-[4.25rem] ltr:xl:text-[3.75rem]">
            {t.hero.titleA}{' '}
            <br className="ltr:hidden" />
            <span className="box-decoration-clone rtl:whitespace-nowrap bg-[linear-gradient(transparent_88%,var(--color-honey)_88%,var(--color-honey)_95%,transparent_95%)] bg-no-repeat text-terracotta">
              {t.hero.titleB}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-cocoa-muted sm:text-xl lg:mx-0">{t.hero.lead}</p>

          <div className="mt-8 flex flex-col items-stretch gap-x-2 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
            <BuyLink className="h-14 rounded-full bg-terracotta px-8 text-base font-extrabold text-white shadow-cta hover:-translate-y-0.5 hover:bg-terracotta-dark sm:text-lg">
              {t.cta.orderFor(price(PRICE))}
              <ArrowRight className="size-5 rtl:rotate-180" strokeWidth={2.5} aria-hidden="true" />
            </BuyLink>
            <a
              href="#features"
              className="inline-flex h-14 items-center justify-center rounded-full px-5 text-base font-bold whitespace-nowrap text-cocoa transition-colors hover:bg-sand"
            >
              {t.cta.why}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm lg:justify-start">
            <span className="flex items-baseline gap-2">
              <span className="font-display text-xl font-black text-cocoa">{price(PRICE)}</span>
              <span className="text-cocoa-muted/80 line-through">{price(LIST_PRICE)}</span>
            </span>
            <span className="hidden h-4 w-px bg-sand-deep sm:block" aria-hidden="true" />
            <span className="flex items-center gap-1.5 font-semibold text-sage">
              <Check className="size-4" strokeWidth={3} aria-hidden="true" />
              {t.hero.priceNote}
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-2xl lg:col-span-7 lg:max-w-none">
          <TabletDemo />
        </div>
      </div>
    </section>
  )
}
