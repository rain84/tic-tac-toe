import { useState } from 'react'
import './App.css'

import type { TBoard, THistory } from './components'
import { Board, History } from './components'
import { getEmptyBoard, getWinner } from './components/board.utils'

export default function App() {
  const [history, setHistory] = useState<THistory>([getEmptyBoard()])
  const [isXNext, setIsXNext] = useState(true)
  const [current, setCurrent] = useState(0)
  const board = history[current]
  const winner = getWinner(board)

  const onBoardClick = (i: number) => {
    if (board[i] !== null || winner) return

    const newBoard: TBoard = [...board]
    newBoard[i] = isXNext ? CROSS : ZERO
    setHistory([...history.slice(0, current + 1), newBoard])
    setIsXNext(!isXNext)
    setCurrent(current + 1)
  }

  const reset = () => {
    setHistory([getEmptyBoard()])
    setCurrent(0)
  }

  const gotoHistory = (i: number) => {
    setCurrent(i)
    setIsXNext(i % 2 === 0)
  }

  return (
    <main className="flex justify-center">
      <div className="flex mt-[20vh]">
        <div>
          <button
            className="p-2 text-2xl font-bold transition-colors bg-red-100 bg-opacity-50 border rounded-sm hover:bg-red-200 bg border-slate-700"
            onClick={reset}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-col items-center mx-24 text-2xl font-bold min-w-48">
          <h1 className="mb-10 ">
            {winner
              ? `Winner: ${winner}`
              : `Next player: ${isXNext ? CROSS : ZERO}`}
          </h1>
          <Board board={board} onClick={onBoardClick} />
        </div>

        <div>
          <h2 className="mb-5 text-2xl font-bold">History</h2>
          <History history={history} onClick={gotoHistory} current={current} />
        </div>
      </div>
    </main>
  )
}

const CROSS = '✖️'
const ZERO = '᮰'