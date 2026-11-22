import { useEffect, useState } from 'react'
import { BatteryCharging, Check, RotateCcw } from 'lucide-react'
import challahImg from '@/assets/challah.webp'
import familyImg from '@/assets/family-dinner.webp'
import { useNow } from '@/hooks'
import { useI18n } from '@/i18n/language'
import { cn } from '@/lib/utils'

type Mode = 'cook' | 'frame'

function useClockStrings(locale: string) {
  const now = useNow()
  const time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }).format(now)
  const date = new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long' }).format(now)
  return { time, date }
}

function ModeSwitch({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  const { t } = useI18n()
  const tabs: { id: Mode; icon: string; label: string; hint?: string }[] = [
    { id: 'cook', icon: '🍳', label: t.demo.cookTab, hint: t.demo.cookHint },
    { id: 'frame', icon: '🖼️', label: t.demo.frameTab },
  ]
  return (
    <div role="tablist" className="inline-flex max-w-full items-center rounded-full border border-sand-deep/70 bg-sand p-1 shadow-[inset_0_1px_3px_rgb(43_33_25/0.08)]">
      {tabs.map((tab) => {
        const active = mode === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={active}
            aria-controls={`screen-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={cn(
              'flex h-10 items-center gap-1.5 rounded-full px-3.5 text-[0.8125rem] whitespace-nowrap transition-all duration-300 focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none sm:gap-2 sm:px-5 sm:text-sm',
              active ? 'bg-white font-bold text-cocoa shadow-sm' : 'font-semibold text-cocoa-muted hover:text-cocoa',
            )}
          >
            <span aria-hidden="true">{tab.icon}</span>
            <span>{tab.label}</span>
            {tab.hint && <span className="hidden font-medium text-cocoa-muted sm:inline">{tab.hint}</span>}
          </button>
        )
      })}
    </div>
  )
}

function CookScreen() {
  const { t } = useI18n()
  const items = t.demo.ingredients
  const [checked, setChecked] = useState<Set<number>>(() => new Set([0]))
  const allDone = checked.size === items.length

  useEffect(() => {
    if (!allDone) return
    const id = window.setTimeout(() => setChecked(new Set()), 1600)
    return () => window.clearTimeout(id)
  }, [allDone])

  const toggle = (i: number) =>
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  const resetButton = (
    <button
      type="button"
      onClick={() => setChecked(new Set())}
      className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-bold text-terracotta transition-colors hover:bg-terracotta-light"
    >
      <RotateCcw className="size-3.5" aria-hidden="true" />
      {t.demo.reset}
    </button>
  )

  return (
    <div id="screen-cook" role="tabpanel" className="grid flex-1 grid-cols-1 @xl:grid-cols-12">
      <div className="hidden flex-col justify-between border-e border-stone-200/70 bg-[#f6f1ea] p-4 @xl:col-span-5 @xl:flex">
        <div>
          <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-2xl bg-honey-light shadow-sm">
            <img src={challahImg} alt={t.demo.recipeAlt} className="size-full object-cover" width={800} height={600} />
            <span className="absolute start-2 top-2 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-terracotta shadow-sm">
              {t.demo.recipeTag}
            </span>
          </div>
          <h3 className="mb-1 font-display text-lg leading-snug font-extrabold text-cocoa">{t.demo.recipeTitle}</h3>
          <p className="text-xs leading-relaxed text-cocoa-muted">{t.demo.recipeDesc}</p>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-stone-200/80 pt-2.5">
          <span className="text-[11px] text-cocoa-muted">{t.demo.autoReset}</span>
          {resetButton}
        </div>
      </div>

      <div className="flex flex-col justify-between bg-white p-3.5 @md:p-4 @xl:col-span-7">
        <div>
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <span className="truncate rounded-md bg-terracotta-light px-2.5 py-0.5 text-[11px] font-bold text-terracotta">
              {t.demo.checklistTag}
            </span>
            <span className="shrink-0 text-xs font-bold text-cocoa-muted tabular-nums" aria-live="polite">
              {t.demo.progress(checked.size, items.length)}
            </span>
          </div>
          <ul className="space-y-1.5">
            {items.map((item, i) => {
              const done = checked.has(i)
              return (
                <li key={i}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={done}
                    onClick={() => toggle(i)}
                    className={cn(
                      'flex w-full items-center gap-3 rounded-xl border p-2 text-start transition-all duration-200 select-none focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:outline-none',
                      done ? 'border-terracotta/15 bg-terracotta-light/40' : 'border-stone-200/70 bg-stone-50 hover:bg-terracotta-light/40',
                    )}
                  >
                    <span
                      className={cn(
                        'flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200',
                        done ? 'scale-105 border-terracotta bg-terracotta' : 'border-stone-300 bg-white',
                      )}
                    >
                      <Check className={cn('size-3 text-white transition-all', done ? 'opacity-100' : 'scale-50 opacity-0')} strokeWidth={3.5} />
                    </span>
                    <span
                      className={cn(
                        'text-[0.8125rem] font-semibold transition-colors @md:text-sm',
                        done ? 'text-stone-400 line-through' : 'text-cocoa',
                      )}
                    >
                      {item}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mt-2.5 flex items-center justify-between border-t border-stone-100 pt-2 @xl:hidden">
          <span className="text-[11px] text-cocoa-muted">{t.demo.autoReset}</span>
          {resetButton}
        </div>
      </div>
    </div>
  )
}

function FrameScreen() {
  const { t } = useI18n()
  const { time, date } = useClockStrings(t.demo.dateLocale)
  return (
    <div id="screen-frame" role="tabpanel" className="relative flex-1 overflow-hidden bg-stone-900">
      <img src={familyImg} alt={t.demo.familyAlt} className="absolute inset-0 size-full object-cover" width={1280} height={720} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/5" />
      <div className="absolute start-3 top-3 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md @md:start-3.5 @md:top-3.5 @md:px-3.5">
        <span className="text-xl" aria-hidden="true">🎂</span>
        <div>
          <p className="text-[10px] font-bold text-terracotta">{t.demo.birthdayLabel}</p>
          <p className="text-xs font-extrabold text-cocoa @md:text-sm">{t.demo.birthday}</p>
        </div>
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white @md:inset-x-5">
        <div className="min-w-0">
          <p className="text-xs font-medium text-white/80">{t.demo.photoCaption}</p>
          <p className="text-xs font-bold @md:text-sm">{t.demo.photoSync}</p>
        </div>
        <div className="shrink-0 text-end">
          <div className="font-display text-4xl leading-none font-light tracking-tight tabular-nums @md:text-5xl" dir="ltr">
            {time}
          </div>
          <div className="mt-1 text-[11px] text-white/80 @md:text-xs">{date}</div>
        </div>
      </div>
    </div>
  )
}

function Tablet({ mode }: { mode: Mode }) {
  const { t } = useI18n()
  const { time } = useClockStrings(t.demo.dateLocale)
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full rounded-[1.75rem] bg-gradient-to-br from-[#2d2a28] to-[#151413] p-2.5 shadow-[0_40px_80px_-30px_rgb(43_33_25/0.55),0_0_0_1.5px_#45403c,inset_0_0_3px_rgb(255_255_255/0.25)] sm:rounded-[2.25rem] sm:p-3.5">
        <div className="mx-auto mb-1.5 size-1.5 rounded-full bg-zinc-600 ring-1 ring-zinc-500/50 sm:mb-2 sm:size-2" />
        <div className="@container overflow-hidden rounded-[1.2rem] bg-[#fdfbf7] sm:rounded-[1.6rem]">
          <div className="flex min-h-[21.5rem] flex-col @xl:aspect-[16/10] @xl:min-h-0">
            <div className="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-stone-200/70 bg-white/90 px-3.5 text-xs text-stone-500 @md:px-5">
              <div className="flex min-w-0 items-center gap-2 font-semibold text-cocoa">
                <span className="size-2 shrink-0 rounded-full bg-sage" />
                <span className="truncate">{t.demo.kitchenName}</span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden rounded-md bg-honey-light px-2 py-0.5 font-semibold text-[#8a5a12] @lg:inline">{t.demo.alwaysOn}</span>
                <span className="font-semibold text-cocoa tabular-nums" dir="ltr">{time}</span>
                <span className="flex items-center gap-0.5 font-bold text-sage" dir="ltr">
                  100%
                  <BatteryCharging className="size-4" aria-hidden="true" />
                </span>
              </div>
            </div>
            {mode === 'cook' ? <CookScreen /> : <FrameScreen />}
          </div>
        </div>
      </div>
      <div className="pointer-events-none relative -mt-px flex flex-col items-center" aria-hidden="true">
        <div className="h-8 w-24 rounded-b-lg bg-[linear-gradient(90deg,#d3cbbf_0%,#f2ede5_38%,#e1d9cd_70%,#c3baae_100%)] shadow-[inset_0_2px_6px_rgb(0_0_0/0.12)] sm:h-10 sm:w-32" />
        <div className="h-3.5 w-52 rounded-full bg-[linear-gradient(180deg,#f5f1ea_0%,#ddd5c8_100%)] shadow-[0_18px_30px_-10px_rgb(43_33_25/0.3),0_2px_0_#bdb4a6] sm:w-72" />
      </div>
      <p className="mt-3 text-center text-xs text-cocoa-muted/80">{t.demo.imageNote}</p>
    </div>
  )
}

function ModeCards({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  const { t } = useI18n()
  const lib = t.demo.library
  const arrow = <span className="inline-block rtl:rotate-180" aria-hidden="true">→</span>
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:gap-4">
      <button
        type="button"
        onClick={() => onChange('frame')}
        aria-pressed={mode === 'frame'}
        className={cn(
          'group relative flex min-h-40 flex-col justify-between overflow-hidden rounded-3xl bg-stone-900 p-3 text-start shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:p-4',
          mode === 'frame' ? 'ring-2 ring-terracotta ring-offset-2 ring-offset-cream' : 'ring-1 ring-black/5',
        )}
      >
        <img src={familyImg} alt="" className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="relative rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm">
          <p className="text-[10px] font-bold text-terracotta">{t.demo.frameCard.upcoming}</p>
          <p className="text-[11px] leading-snug font-extrabold text-cocoa sm:text-xs">{t.demo.frameCard.birthday}</p>
        </div>
        <div className="relative text-white">
          <p className="text-sm font-extrabold">{t.demo.frameCard.title}</p>
          <p className="text-[11px] font-semibold text-honey">
            {t.demo.frameCard.view} {arrow}
          </p>
        </div>
      </button>

      <button
        type="button"
        onClick={() => onChange('cook')}
        aria-pressed={mode === 'cook'}
        className={cn(
          'flex min-h-40 flex-col justify-between gap-2 rounded-3xl bg-white p-3 text-start shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:p-4',
          mode === 'cook' ? 'ring-2 ring-terracotta ring-offset-2 ring-offset-cream' : 'ring-1 ring-black/5',
        )}
      >
        <div className="flex w-full items-center justify-between gap-1">
          <span className="text-sm font-extrabold text-cocoa">{lib.title}</span>
          <span className="rounded-full bg-sage-light px-2 py-0.5 text-[10px] font-bold whitespace-nowrap text-sage">{lib.offline}</span>
        </div>
        <div className="grid w-full grid-cols-2 gap-1.5">
          {lib.categories.map((c, i) => (
            <div
              key={c.name}
              className={cn('min-w-0 rounded-xl px-2 py-1.5', i === 0 ? 'bg-terracotta-light' : 'bg-sand', i > 1 && 'max-sm:hidden')}
            >
              <p className="text-[11px] leading-tight font-bold text-cocoa">
                <span aria-hidden="true">{c.emoji}</span> {c.name}
              </p>
              <p className="text-[10px] text-cocoa-muted">{c.count}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-between gap-1 text-[11px] font-bold text-terracotta">
          <span className="truncate">{lib.noAds}</span>
          <span className="hidden shrink-0 sm:inline">
            {lib.view} {arrow}
          </span>
        </div>
      </button>
    </div>
  )
}

export function TabletDemo() {
  const [mode, setMode] = useState<Mode>('cook')
  return (
    <div id="demo" className="flex w-full scroll-mt-24 flex-col items-center gap-5 sm:gap-6">
      <ModeSwitch mode={mode} onChange={setMode} />
      <Tablet mode={mode} />
      <ModeCards mode={mode} onChange={setMode} />
    </div>
  )
}
