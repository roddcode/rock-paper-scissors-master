import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GameContext } from '../context/gameContext'

const Main = () => {
  const {choice, setChoice, setHouse } =
    useContext(GameContext)
    const navigate = useNavigate();

    const houseChoice = () => {
      const random = Math.floor(Math.random() * 3) + 1
      if (random === 1) {
        setHouse('rock')
      } else if (random === 2) {
        setHouse('paper')
      } else if (random === 3) {
        setHouse('scissors')
      }
    }

  const handleChoice = (e) => {
    if (e.target.id === 'rock') {
      setChoice('rock')
    } else if (e.target.id === 'paper') {
      setChoice('paper')
    } else if (e.target.id === 'scissors') {
      setChoice('scissors')
    }
    houseChoice()
  }

  useEffect(() => {
    if(choice) {
      navigate('/play')
    }
  }, [choice, navigate])

  return (
    <section className='w-[80%] h-full border-black border'>
      <div className='bg-white w-32 h-32 rounded-full border-[10px] border-blue-600 '>
        <button
          className=' flex rounded-full items-center justify-center w-full h-full bg-paper bg-center bg-no-repeat'
          onClick={(e) => handleChoice(e)}
          id='paper'
        ></button>
      </div>

      <div className='bg-white w-32 h-32 rounded-full border-[10px] border-yellow-600 '>
        <button
          className=' flex rounded-full items-center justify-center w-full h-full bg-scissors bg-center bg-no-repeat'
          onClick={(e) => handleChoice(e)}
          id='scissors'
        ></button>
      </div>

      <div className='bg-white w-32 h-32 rounded-full border-[10px] border-red-600 '>
        <button
          className=' flex rounded-full items-center justify-center w-full h-full bg-rock bg-center bg-no-repeat'
          onClick={(e) => handleChoice(e)}
          id='rock'
        ></button>
      </div>
    </section>
  )
}

export default Main
