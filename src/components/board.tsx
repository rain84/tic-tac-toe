import { clsx } from 'clsx'
import { Square } from '.'
import { getWinners } from './board.utils'

export const Board = ({ board, onClick }: TProps) => {
  const borderClass = 'border-2 border-opacity-75 border-amber-900 font-bold'
  const winnerClass = 'bg-green-300 hover:bg-green-300'
  const notWinnerClass = 'hover:bg-rose-50'
  const winners = getWinners(board)

  console.info('winners', winners)

  const border = [
    clsx(
      'border-l-0 border-t-0',
      borderClass,
      winners[0] ? winnerClass : notWinnerClass
    ),
    clsx('border-t-0', borderClass, winners[1] ? winnerClass : notWinnerClass),
    clsx(
      'border-t-0 border-r-0',
      borderClass,
      winners[2] ? winnerClass : notWinnerClass
    ),

    clsx('border-l-0', borderClass, winners[3] ? winnerClass : notWinnerClass),
    clsx(borderClass, winners[4] ? winnerClass : notWinnerClass),
    clsx('border-r-0', borderClass, winners[5] ? winnerClass : notWinnerClass),

    clsx(
      'border-l-0 border-b-0',
      borderClass,
      winners[6] ? winnerClass : notWinnerClass
    ),
    clsx('border-b-0', borderClass, winners[7] ? winnerClass : notWinnerClass),
    clsx(
      'border-b-0 border-r-0',
      borderClass,
      winners[8] ? winnerClass : notWinnerClass
    ),
  ]

  return (
    <div>
      <div className="flex">
        <Square className={border[0]} onClick={() => onClick(0)}>
          {board[0]}
        </Square>
        <Square className={border[1]} onClick={() => onClick(1)}>
          {board[1]}
        </Square>
        <Square className={border[2]} onClick={() => onClick(2)}>
          {board[2]}
        </Square>
      </div>
      <div className="flex">
        <Square className={border[3]} onClick={() => onClick(3)}>
          {board[3]}
        </Square>
        <Square className={border[4]} onClick={() => onClick(4)}>
          {board[4]}
        </Square>
        <Square className={border[5]} onClick={() => onClick(5)}>
          {board[5]}
        </Square>
      </div>
      <div className="flex">
        <Square className={border[6]} onClick={() => onClick(6)}>
          {board[6]}
        </Square>
        <Square className={border[7]} onClick={() => onClick(7)}>
          {board[7]}
        </Square>
        <Square className={border[8]} onClick={() => onClick(8)}>
          {board[8]}
        </Square>
      </div>
    </div>
  )
}

export type TCell = null | string
// prettier-ignore
export type TBoard = [ TCell, TCell, TCell, TCell, TCell, TCell, TCell, TCell, TCell]

type TProps = {
  board: TBoard
  onClick: (i: number) => void
}
