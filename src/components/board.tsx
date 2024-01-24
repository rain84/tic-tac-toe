import { Square } from '.'

export const Board = ({ board, onClick }: TProps) => {
  return (
    <div>
      <div className="flex">
        <Square onClick={() => onClick(0)}>{board[0]}</Square>
        <Square onClick={() => onClick(1)}>{board[1]}</Square>
        <Square onClick={() => onClick(2)}>{board[2]}</Square>
      </div>
      <div className="flex">
        <Square onClick={() => onClick(3)}>{board[3]}</Square>
        <Square onClick={() => onClick(4)}>{board[4]}</Square>
        <Square onClick={() => onClick(5)}>{board[5]}</Square>
      </div>
      <div className="flex">
        <Square onClick={() => onClick(6)}>{board[6]}</Square>
        <Square onClick={() => onClick(7)}>{board[7]}</Square>
        <Square onClick={() => onClick(8)}>{board[8]}</Square>
      </div>
    </div>
  )
}

type TProps = {
  board: string[]
  onClick: (i: number) => void
}
