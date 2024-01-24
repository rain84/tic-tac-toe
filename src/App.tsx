import { useState } from 'react'
import './App.css'

import { Board } from './components'

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [isXNext, setIsXNext] = useState(true)
  const [current, setCurrent] = useState(0)
  const board = history[current]
  const winner = getWinner(board)

  const onBoardClick = (i: number) => {
    if (board[i] !== null || winner) return

    const newBoard = [...board]
    newBoard[i] = isXNext ? 'X' : 'O'
    setHistory([...history.slice(0, current + 1), newBoard])
    setIsXNext(!isXNext)
    setCurrent(current + 1)
  }

  const reset = () => {
    setHistory([Array(9).fill(null)])
    setCurrent(0)
  }

  const gotoHistory = (i: number) => {
    setCurrent(i)
    setIsXNext(i % 2 === 0)
  }

  return (
    <main className="flex gap-10">
      <div>
        <button
          className="p-0.5 border rounded-sm border-slate-700"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1>
          {winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}
        </h1>
        <Board board={board} onClick={onBoardClick} />
      </div>
      <div>
        <h2>History</h2>
        <ol>
          {history.map((board, index) => (
            <li
              className={`mb-1 border border-green-800 hover:cursor-pointer rounded-sm min-w-3 ${
                index === current ? 'bg-green-800 bg-opacity-10' : ''
              }`}
              key={index}
              onClick={() => gotoHistory(index)}
            >
              {index}
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}

const getWinner = (board: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}
