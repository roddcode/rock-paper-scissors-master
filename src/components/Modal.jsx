import { useState } from 'react'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        className='px-8 py-2 rounded border border-white'
        onClick={() => setIsOpen(true)}
      >
        RULES
      </button>

      {isOpen && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 bg-white sm:bg-black sm:bg-opacity-50'
          onClick={() => setIsOpen(false)}
        >
          <div
            className='modal h-[400px] w-[400px] rounded-[20px] bg-white flex flex-col items-center justify-center'
            onClick={(e) => e.stopPropagation()}
          >
            <span className='flex justify-between w-full px-12'>
              <h3 className='text-gray-400 text-3xl pb-8'>Rules</h3>{' '}
              <span className=' cursor-pointer' onClick={() => setIsOpen(false)}>
                <img src='/images/icon-close.svg' />
              </span>
            </span>
            <img src='/images/image-rules.svg' />
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
