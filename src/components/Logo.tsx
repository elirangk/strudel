import { cn } from '@/lib/utils'
import logo1x from '@/assets/logo.webp'
import logo2x from '@/assets/logo@2x.webp'

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logo1x}
      srcSet={`${logo1x} 1x, ${logo2x} 2x`}
      alt=""
      width={48}
      height={48}
      decoding="async"
      className={cn('size-10 shrink-0 rounded-full object-cover sm:size-11', className)}
      aria-hidden="true"
    />
  )
}
