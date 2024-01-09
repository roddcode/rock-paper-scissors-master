import { useContext } from 'react'
import { GameContext } from '../context/gameContext'

const Header = () => {
  const { score } = useContext(GameContext)
  
  return (
    <header className='border-2 border-header-outline p-6 rounded-xl max-w-screen-lg min-w-[80%] my-8 flex justify-between items-center gap-4'>
      <h1 className='flex flex-col uppercase text-2xl sm:text-3xl font text-start leading-[20px] sm:leading-[24px]'>
        <span>rock</span>
        <span>paper</span>
        <span>scissors</span>
      </h1>
      <div className='bg-white text-header-outline px-8 py-2 rounded text-center'>
        <h2 className='font-sm'>SCORE</h2>
        <span className='text-5xl'>{score}</span>
      </div>
    </header>
  )
}

export default Header
