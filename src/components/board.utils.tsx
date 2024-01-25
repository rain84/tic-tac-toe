import type { TBoard } from './board'

export const getEmptyBoard = (): TBoard => Array(9).fill(null) as TBoard

export const getWinnerCombination = (board: TBoard) => {
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
      return lines[i]
    }
  }
  return null
}

export const getWinner = (board: TBoard) => {
  const lines = getWinnerCombination(board)

  return lines ? board[lines[0]] : null
}

export const getWinners = (board: TBoard) => {
  const winners = Array(9).fill(null)
  const winnerCombination = getWinnerCombination(board)

  if (winnerCombination) {
    winners[winnerCombination[0]] = true
    winners[winnerCombination[1]] = true
    winners[winnerCombination[2]] = true
  }

  return winners
}
