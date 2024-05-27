import cn from 'classnames'
import { useState } from 'react'
import './App.css'
import { Note, Pitch, fretBoard } from './utils/notes'

// styles
const noteIndicatorStyles =
  'absolute w-[30px] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center text-white'
const noteContainerStyles = 'w-[50px] relative'
const noteStyles =
  'text-white absolute top-0 left-0 w-[50px] h-[50px] rounded-full bg-slate-500 flex justify-center items-center text-center'
const colMiddleCenter = 'flex flex-col justify-around items-center align-middle'
const rowMiddleCenter = 'flex flex-row items-center align-middle justify-between'
const pinkGradient = 'bg-gradient-to-b from-rose-300 via-rose-400 to-from-rose-300'

interface Random {
  pitchIndex: number
  noteIndex: number
  note: Note
}

function App() {
  const [currentPitch, setCurrentPitch] = useState<Pitch>('flat')
  const [currentRandom, setCurrentRandom] = useState<Random | null>(null)
  const [guess, setGuess] = useState<string | null>(null)
  const [fretLimit, setFretLimit] = useState<number | null>(null)
  const pitch = fretBoard[currentPitch]
  const pitchMatrix = [pitch.G, pitch.D, pitch.A, pitch.E]
  const uniqueNoteSet = new Set<string>(
    [...pitch.G, ...pitch.D, ...pitch.A, ...pitch.E].map((note) => note.localization)
  )

  function handleQuizStart() {
    const randomPitchIndex = Math.floor(Math.random() * pitchMatrix.length)
    const randomNoteIndex = Math.floor(
      Math.random() * (fretLimit ?? pitchMatrix[randomPitchIndex].length)
    )

    setGuess(null)
    setCurrentRandom({
      pitchIndex: randomPitchIndex,
      noteIndex: randomNoteIndex,
      note: pitchMatrix[randomPitchIndex][randomNoteIndex]
    })
  }

  function handleFretLimitChange(event: React.ChangeEvent<HTMLInputElement>) {
    const fretLimit = Number(event.target.value)
    setFretLimit(fretLimit)
  }

  return (
    <div className='w-full my-auto'>
      <button
        onClick={() => {
          setCurrentPitch(currentPitch === 'flat' ? 'sharp' : 'flat')
        }}
        className='bg-orange-900 hover:bg-orange-950 text-white p-2 rounded-md m-3'
      >
        {currentPitch === 'flat' ? 'Váltás föléhangoltra' : 'Váltás aláhangoltra'}
      </button>
      <button
        onClick={handleQuizStart}
        className='bg-violet-600 hover:bg-violet-900 text-white p-2 rounded-md m-3'
      >
        REJTS EL EGY HANGOT!
      </button>
      <label htmlFor='fretLimit'>Hányas bundig szeretnél játszani?</label>
      <input
        className='w-[70px] h-full border-slate-700 border-2 rounded-md p-2 m-3'
        type='number'
        name='fretLimit'
        id='fretLimit'
        min={1}
        max={20}
        onChange={handleFretLimitChange}
      />
      <div className='flex flex-col justify-center'>
        <div className={cn('pl-[90px] pr-[15px] h-[50px] w-full', colMiddleCenter)}>
          <div className={cn('w-full ', rowMiddleCenter)}>
            {pitch.G.map((_, index) => {
              const order = index + 1
              const positionMarkers = [3, 5, 7, 9, 12, 15, 17, 19]
              return (
                <div key={index} className='w-[50px] relative'>
                  <span
                    className={cn(
                      'text-black text-lg w-[30px] h-[30px] flex justify-center items-center rounded-full',
                      {
                        'text-white bg-amber-950': positionMarkers.includes(order),
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
            {pitchMatrix.map((pitch, pitchIndex) => (
              <div key={pitchIndex} className={cn('w-full ', rowMiddleCenter)}>
                {pitch.map((note, noteIndex) => (
                  <div
                    key={noteIndex}
                    className={cn(noteContainerStyles, {
                      invisible:
                        pitchIndex === currentRandom?.pitchIndex &&
                        noteIndex === currentRandom?.noteIndex
                    })}
                  >
                    <span
                      className={cn(noteStyles, {
                        'text-opacity-0': fretLimit && fretLimit > noteIndex
                      })}
                    >
                      {note.localization}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={cn('mx-auto my-16 max-w-[1200px] gap-1', rowMiddleCenter)}>
        <h2>TIPP: </h2>
        {[...uniqueNoteSet].map((uniqueNote) => (
          <button
            key={uniqueNote}
            className={cn(
              'text-lg rounded-full w-full h-[80px] bg-violet-600 text-white cursor-pointer hover:bg-violet-900',
              colMiddleCenter,
              {
                '!bg-red-400 !hover:bg-red-200':
                  guess === uniqueNote &&
                  currentRandom &&
                  guess !== currentRandom?.note.localization,
                '!bg-green-400 !hover:bg-green-200':
                  guess === uniqueNote &&
                  currentRandom &&
                  guess === currentRandom?.note.localization
              }
            )}
            onClick={() => setGuess(uniqueNote)}
          >
            {uniqueNote}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
