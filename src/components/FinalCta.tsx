import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks'
import { PRICE } from '@/i18n/copy'
import { useI18n } from '@/i18n/language'
import familyImg from '@/assets/family-dinner.webp'
import { BuyLink } from './BuyLink'

export function FinalCta() {
  const { t, price } = useI18n()
  const ref = useReveal<HTMLDivElement>()
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
      <div ref={ref} className="reveal relative isolate overflow-hidden rounded-[2rem] bg-cocoa px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-20">
        <img src={familyImg} alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-35" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cocoa via-cocoa/80 to-cocoa/55" />
        <h2 className="mx-auto max-w-2xl font-display text-[2rem] leading-tight font-black tracking-tight text-white text-balance sm:text-5xl">
          {t.finalCta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{t.finalCta.sub}</p>
        <BuyLink className="mt-8 h-14 w-full rounded-full bg-terracotta px-8 text-lg font-extrabold text-white shadow-cta hover:-translate-y-0.5 hover:bg-terracotta-dark sm:w-auto">
          {t.cta.orderFor(price(PRICE))}
          <ArrowRight className="size-5 rtl:rotate-180" strokeWidth={2.5} aria-hidden="true" />
        </BuyLink>
      </div>
    </section>
  )
}
