import { clsx } from 'clsx'

export const Square = ({ className, children, onClick }: TProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center text-black min-w-16 min-h-16 leading-5 text-4xl ',
        className
      )}
    >
      {children}
    </button>
  )
}

type TProps = {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}
