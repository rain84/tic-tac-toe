import { type TBoard } from './board'

export const History = ({ history, current, onClick }: TProps) => {
  return (
    <ol className="absolute">
      {history.map((_, index) => (
        <li
          className={`mb-1 border border-green-800 hover:cursor-pointer rounded-sm min-w-20 font-bold hover:bg-green-400 hover:bg-opacity-100 transition-colors text-center ${
            index === current ? 'bg-green-800 bg-opacity-10' : ''
          }`}
          key={index}
          onClick={() => onClick(index)}
        >
          {index}
        </li>
      ))}
    </ol>
  )
}

export type THistory = TBoard[]

type TProps = {
  history: THistory
  current: number
  onClick: (i: number) => void
}
