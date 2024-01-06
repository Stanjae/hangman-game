import React from 'react'
import Rope1 from '../../assets/rope.svg';
import { useNavigate } from 'react-router-dom';
//import Rope2 from '../../assets/rope2.png'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className=' w-full bg-[#112444] h-screen flex justify-center items-center'>
        <div className=' max-w-2xl'>
            <div className=' grid grid-cols-6'>
                <div className=' col-span-2'><img className=' object-cover block mx-auto' src={Rope1}/></div>
                <div className=' pr-2 py-2 col-span-4'>
                    <h1 className=' mb-2 text-white font-bold text-4xl sm:text-7xl'>HANGMAN</h1>
                    <h2 className=' mb-4 text-blue-600 text-2xl font-semibold'>FREE VERSION</h2>
                    <p className=' text-left text-lg leading-relaxed text-slate-100'>Can You Guess the Word before you get Hung?</p>
                </div>
            </div>
            <div className=' p-4  md:p-2 flex flex-1 justify-center gap-x-6'>
                <button onClick={()=> navigate('/hangman/')}
                className=' rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center'>
                CREDITS</button>

                <button onClick={()=> navigate('/hangman/play')}
                className=' rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center'>
                PLAY</button>
            </div>
        </div>
      
    </div>
  )
}

export default Home

