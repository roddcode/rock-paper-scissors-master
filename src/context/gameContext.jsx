import { createContext, useState } from 'react'
export const GameContext = createContext()
export const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState('')
  const [house, setHouse] = useState('')

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        choice,
        setChoice,
        house,
        setHouse,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
