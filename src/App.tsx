import './App.css'

function App() {
  return (
    <>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <div className='h-[300px] w-full bg-gradient-to-b from-amber-900 via-amber-700 to-amber-900 relative'>
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
        </div>
      </div>
    </>
  )
}

export default App
