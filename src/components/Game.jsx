import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/gameContext'
import { useContext, useEffect, useState } from 'react'

const Game = () => {
  const { house, setHouse, choice, setChoice, setScore } =
    useContext(GameContext)
  const navigate = useNavigate()

  const [lose, setLose] = useState(false)

  console.log(choice, house)
  useEffect(() => {
    if (
      (choice === 'rock' && house === 'scissors') ||
      (choice === 'scissors' && house === 'paper') ||
      (choice === 'paper' && house === 'rock')
    ) {
      setScore((prevScore) => prevScore + 1)
    } else if (
      (choice === 'rock' && house === 'paper') ||
      (choice === 'scissors' && house === 'rock') ||
      (choice === 'paper' && house === 'scissors')
    ) {
      setLose(true)
      setScore(0)
    }
  }, [choice, house, setScore])

  return (
    <section className='w-[80%] h-full'>
      <div className='flex flex-col sm:flex-row items-center h-full justify-center gap-6'>
        <div
          className={`bg-white w-32 h-32 rounded-full border-[10px] border-${choice}`}
        >
          <button
            className={`flex rounded-full items-center justify-center w-full h-full bg-${choice} bg-center bg-no-repeat`}
            id={choice}
          ></button>
        </div>

        <div>
          <h3>{
            lose ? 'YOU LOSE!' : 'YOU WIN!'
            }</h3>
          <button
            className='bg-white text-dark-text px-12 py-3 text-sm rounded'
            onClick={() => {
              setChoice('')
              setHouse('')
              navigate('/')
            }}
          >
            PLAY AGAIN
          </button>
        </div>

        <div
          className={`bg-white w-32 h-32 rounded-full border-[10px] border-${house}`}
        >
          <button
            className={`flex rounded-full items-center justify-center w-full h-full bg-${house} bg-center bg-no-repeat`}
            id={house}
          ></button>
        </div>
      </div>
    </section>
  )
}

export default Game
