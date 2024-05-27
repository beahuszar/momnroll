import cn from 'classnames'
import { useState } from 'react'
import './App.css'
import { Pitch, fretBoard } from './utils/notes'

function App() {
  const [currentPitch, setCurrentPitch] = useState<Pitch>('flat')
  const pitch = fretBoard[currentPitch]

  return (
    <>
      <button
        onClick={() => {
          setCurrentPitch(currentPitch === 'flat' ? 'sharp' : 'flat')
        }}
        className='bg-orange-950 text-white p-2 rounded-md m-3'
      >
        {currentPitch === 'flat' ? 'Váltás föléhangoltra' : 'Váltás aláhangoltra'}
      </button>
      <div className='h-full w-full flex flex-col justify-center gap-[30px]'>
        <div className='pl-[90px] pr-[15px] h-[50px] w-full flex flex-col justify-around items-center align-middle'>
          <div className='w-full flex flex-row align-middle justify-between'>
            {pitch.G.map((_, index) => {
              const order = index + 1
              const positionMarkers = [3, 5, 7, 9, 12, 15, 17, 19]
              return (
                <div key={index} className='w-[50px] relative'>
                  <span
                    className={cn('text-black text-lg absolute top-0 left-0  w-[30px] h-[30px]', {
                      'text-white bg-amber-950 rounded-full flex justify-center items-center':
                        positionMarkers.includes(order),
                      'bg-violet-400': order === 12
                    })}
                  >
                    {order}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <div className='h-[500px] w-full bg-gradient-to-b from-amber-900 via-amber-700 to-amber-900 relative'>
          <div className='w-full h-full flex flex-col justify-around items-center align-middle absolute'>
            <div className='w-full h-[3px] bg-gradient-to-b from-rose-300 via-rose-400 to-from-rose-300'></div>
            <div className='w-full h-[5px] bg-gradient-to-b from-rose-300 via-rose-400 to-from-rose-300'></div>
            <div className='w-full h-[7px] bg-gradient-to-b from-rose-300 via-rose-400 to-from-rose-300'></div>
            <div className='w-full h-[9px] bg-gradient-to-b from-rose-300 via-rose-400 to-from-rose-300'></div>
          </div>
          <div className='bg-slate-700/40 w-[80px] h-full flex flex-col justify-around items-center align-middle absolute'>
            <div className='w-full h-[3px] relative'>
              <span className='absolute w-[30px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white'>
                G
              </span>
            </div>
            <div className='w-full h-[5px] relative'>
              <span className='absolute w-[30px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white'>
                D
              </span>
            </div>
            <div className='w-full h-[7px] relative'>
              <span className='absolute w-[30px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white'>
                A
              </span>
            </div>
            <div className='w-full h-[9px] relative'>
              <span className='absolute w-[30px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white'>
                E
              </span>
            </div>
          </div>
          <div className='pl-[90px] pr-[15px] h-full w-full flex flex-col justify-around items-center align-middle absolute'>
            <div className='w-full flex flex-row align-middle justify-between'>
              {pitch.G.map((note, index) => (
                <div key={index} className='w-[50px] relative'>
                  <span className='text-white absolute top-0 left-0'>{note.localization}</span>
                </div>
              ))}
            </div>
            <div className='w-full flex flex-row align-middle justify-between'>
              {pitch.D.map((note, index) => (
                <div key={index} className='w-[50px] relative'>
                  <span className='text-white absolute top-0 left-0'>{note.localization}</span>
                </div>
              ))}
            </div>
            <div className='w-full flex flex-row align-middle justify-between'>
              {pitch.A.map((note, index) => (
                <div key={index} className='w-[50px] relative'>
                  <span className='text-white absolute top-0 left-0'>{note.localization}</span>
                </div>
              ))}
            </div>
            <div className='w-full flex flex-row align-middle justify-between'>
              {pitch.E.map((note, index) => (
                <div key={index} className='w-[50px] relative'>
                  <span className='text-white absolute top-0 left-0'>{note.localization}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
