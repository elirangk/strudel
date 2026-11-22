import { BellOff, Heart, ImageIcon, Zap, type LucideIcon } from 'lucide-react'
import challahImg from '@/assets/challah.webp'
import { useReveal } from '@/hooks'
import { useI18n } from '@/i18n/language'
import { cn } from '@/lib/utils'

const styles: { icon: LucideIcon; tile: string; dot: string }[] = [
  { icon: BellOff, tile: 'bg-terracotta-light text-terracotta', dot: 'bg-sage' },
  { icon: ImageIcon, tile: 'bg-honey-light text-[#9a6514]', dot: 'bg-terracotta' },
  { icon: Zap, tile: 'bg-sage-light text-sage', dot: 'bg-honey' },
]

function FeatureCard({ index, title, body, note }: { index: number; title: string; body: string; note: string }) {
  const ref = useReveal<HTMLLIElement>()
  const { icon: Icon, tile, dot } = styles[index]
  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="reveal flex flex-col rounded-[2rem] border border-black/[0.04] bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-8 md:max-lg:grid md:max-lg:grid-cols-[3.5rem_1fr] md:max-lg:gap-x-7 lg:justify-between"
    >
      <span className={cn('mb-6 flex size-14 items-center justify-center rounded-2xl md:max-lg:row-span-2 md:max-lg:mb-0', tile)}>
        <Icon className="size-7" strokeWidth={2} aria-hidden="true" />
      </span>
      <div className="lg:flex-1">
        <h3 className="mb-3 font-display text-2xl leading-tight font-extrabold text-cocoa">{title}</h3>
        <p className="text-base leading-relaxed text-cocoa-muted">{body}</p>
      </div>
      <p className="mt-7 flex items-center gap-2 border-t border-stone-100 pt-5 text-sm font-bold text-cocoa md:max-lg:col-start-2 md:max-lg:mt-5">
        <span className={cn('size-2 shrink-0 rounded-full', dot)} aria-hidden="true" />
        {note}
      </p>
    </li>
  )
}

function FamilyRecipes() {
  const { t } = useI18n()
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal mt-5 flex flex-col items-center gap-5 overflow-hidden rounded-[2rem] border border-terracotta/10 bg-terracotta-light/60 p-6 text-center sm:mt-6 sm:flex-row sm:gap-7 sm:p-7 sm:text-start"
    >
      <img
        src={challahImg}
        alt=""
        loading="lazy"
        className="size-20 shrink-0 rounded-[1.25rem] object-cover shadow-soft ring-4 ring-white sm:size-24"
      />
      <div className="min-w-0">
        <h3 className="flex items-center justify-center gap-2 font-display text-xl leading-tight font-extrabold text-cocoa sm:justify-start sm:text-2xl">
          <Heart className="hidden size-5 shrink-0 fill-terracotta text-terracotta sm:block" aria-hidden="true" />
          {t.features.familyTitle}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-cocoa-muted sm:text-lg">{t.features.familyBody}</p>
      </div>
    </div>
  )
}

export function Features() {
  const { t } = useI18n()
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="features" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div ref={headRef} className="reveal mx-auto mb-12 max-w-2xl text-center sm:mb-16">
        <p className="text-sm font-bold tracking-wide text-terracotta">{t.features.eyebrow}</p>
        <h2 className="mt-3 font-display text-[2rem] leading-[1.12] font-black tracking-tight text-cocoa text-balance sm:text-5xl">
          {t.features.titleA}
          <br />
          <span className="text-cocoa-muted">{t.features.titleB}</span>
        </h2>
      </div>
      <ul className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
        {t.features.items.map((item, i) => (
          <FeatureCard key={item.title} index={i} {...item} />
        ))}
      </ul>
      <FamilyRecipes />
    </section>
  )
}
