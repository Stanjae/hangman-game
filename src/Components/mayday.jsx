import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Mayday = ({HandleLogOut, getMoreHints}) => {
    const [reet, setReet] = useState(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('loggedinUser') || {}))

    const navigate = useNavigate()

  return (
    <nav class="relative">
    <div class="relative flex h-16 items-center pr-3 justify-end">
    {!reet ?
        <button onClick={()=> setReet(true)} type="button" class="relative flex items-center justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
          <span class="absolute -inset-0.5"></span>
          <svg  class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
        </button>
        :
        <button onClick={()=> setReet(false)} type="button" class="relative flex items-center justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
          <span class="absolute -inset-0.5"></span>
          
          <svg  class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          
        </button>
        }
      </div>

  {/* Mobile menu, show/hide based on menu state. */}
  <div className={`${reet ? 'flex':'hidden'} md:hidden px-2  w-full absolute z-50 bg-blue-900`} >
    <div class=" relative flex flex-col w-full space-y-4 px-2 pb-3 pt-2">

        <div className="flex items-center gap-4">
            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span class="font-medium text-gray-600 dark:text-gray-300">{currentUser?.username?.toUpperCase().slice(0,2)}</span>
            </div>
            <div class="font-medium dark:text-white">
                <div className=' text-sm text-white'>{currentUser?.username}</div>
            </div>
        </div>

        <button type='button' onClick={()=> navigate('/hangman/highscore')}
                className=" rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-base text-center"
                    >
                    HighScore
        </button>
        <button type='button' onClick={getMoreHints}
                className=" rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-base text-center"
                    >
                    More Hints!!
            </button>

        <button type='button' onClick={HandleLogOut}
            className=" rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-base text-center"
                    >Quit
        </button>
    </div>
  </div>
</nav>

  )
}

export default Mayday
