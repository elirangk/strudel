import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex size-9 shrink-0 items-center justify-center rounded-[0.85rem] bg-terracotta text-white shadow-[inset_0_-2px_0_rgb(0_0_0/0.12)]',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-[1.15rem]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <rect x="4" y="2.5" width="16" height="19" rx="3.5" />
        <path d="M9 7.5h6M9 11.5h6M9 15.5h3.5" />
      </svg>
    </span>
  )
}
