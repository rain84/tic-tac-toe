export const Square = ({ children, onClick }: TProps) => {
  return (
    <button
      onClick={onClick}
      className="min-w-6 min-h-6 inline-flex items-center justify-center border border-black text-black"
    >
      {children}
    </button>
  )
}

type TProps = {
  children: React.ReactNode
  onClick?: () => void
}
