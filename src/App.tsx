import cn from 'classnames'
import { useState } from 'react'
import './App.css'
import { Pitch, fretBoard } from './utils/notes'

function App() {
  const [currentPitch, setCurrentPitch] = useState<Pitch>('flat')
  const pitch = fretBoard[currentPitch]
  const noteIndicatorStyles =
    'absolute w-[30px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white'
  const pitchContainerStyles = 'w-full flex flex-row align-middle justify-between'
  const noteContainerStyles = 'w-[50px] relative'
  const noteStyles =
    'text-white absolute top-0 left-0 w-[50px] h-[50px] rounded-full bg-slate-500 flex justify-center items-center text-center'
  const colMiddleCenter = 'flex flex-col justify-around items-center align-middle'
  const pinkGradient = 'bg-gradient-to-b from-rose-300 via-rose-400 to-from-rose-300'

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
        <div className={cn('pl-[90px] pr-[15px] h-[50px] w-full', colMiddleCenter)}>
          <div className='w-full flex flex-row align-middle justify-between'>
            {pitch.G.map((_, index) => {
              const order = index + 1
              const positionMarkers = [3, 5, 7, 9, 12, 15, 17, 19]
              return (
                <div key={index} className='w-[50px] relative'>
                  <span
                    className={cn(
                      'text-black text-lg absolute top-0 left-0 w-[30px] h-[30px] flex justify-center items-center',
                      {
                        'text-white bg-amber-950 rounded-full': positionMarkers.includes(order),
                        'bg-violet-400': order === 12
                      }
                    )}
                  >
                    {order}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <div className='h-[500px] w-full bg-gradient-to-b from-amber-900 via-amber-700 to-amber-900 relative'>
          <div className={cn('w-full h-full absolute', colMiddleCenter)}>
            <div className={cn('w-full h-[3px]', pinkGradient)}></div>
            <div className={cn('w-full h-[5px]', pinkGradient)}></div>
            <div className={cn('w-full h-[7px]', pinkGradient)}></div>
            <div className={cn('w-full h-[9px]', pinkGradient)}></div>
          </div>
          <div className={cn('bg-slate-700/40 w-[80px] h-full absolute', colMiddleCenter)}>
            <div className='w-full h-[3px] relative'>
              <span className={noteIndicatorStyles}>G</span>
            </div>
            <div className='w-full h-[5px] relative'>
              <span className={noteIndicatorStyles}>D</span>
            </div>
            <div className='w-full h-[7px] relative'>
              <span className={noteIndicatorStyles}>A</span>
            </div>
            <div className='w-full h-[9px] relative'>
              <span className={noteIndicatorStyles}>E</span>
            </div>
          </div>
          <div className={cn('pl-[90px] pr-[15px] h-full w-full absolute', colMiddleCenter)}>
            <div className={pitchContainerStyles}>
              {pitch.G.map((note, index) => (
                <div key={index} className={noteContainerStyles}>
                  <span className={noteStyles}>{note.localization}</span>
                </div>
              ))}
            </div>
            <div className={pitchContainerStyles}>
              {pitch.D.map((note, index) => (
                <div key={index} className={noteContainerStyles}>
                  <span className={noteStyles}>{note.localization}</span>
                </div>
              ))}
            </div>
            <div className={pitchContainerStyles}>
              {pitch.A.map((note, index) => (
                <div key={index} className={noteContainerStyles}>
                  <span className={noteStyles}>{note.localization}</span>
                </div>
              ))}
            </div>
            <div className={pitchContainerStyles}>
              {pitch.E.map((note, index) => (
                <div key={index} className={noteContainerStyles}>
                  <span className={noteStyles}>{note.localization}</span>
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
