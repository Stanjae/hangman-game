import React from 'react'
import { useNavigate } from 'react-router-dom'

const Highscore = () => {
  const scores = JSON.parse(localStorage.getItem('loggedinUser')) || {}

  const navigate = useNavigate()
  return (
    <div>
      <h1 className=' text-center text-white text-3xl font-semibold italic mb-4'>Your HighScores!!</h1>
      <div className=' p-5 flex-col flex flex-1 justify-center items-center'>
        {scores?.highscore.sort(function(a, b){return b - a}).map((item, index)=>(<div className=' flex items-center bg-white  shadow-md rounded-lg text-center font-bold italic' 
        key={index}>
        <h2 className=' py-2 pl-6  pr-20 text-gray-900'>{scores.username}</h2>
        <div className=' text-white rounded-md bg-blue-500  py-2 px-4'>{item}</div>
        </div>))}
      </div>

      <div className=' p-2 flex flex-1 justify-center gap-x-6'>
                <button onClick={()=> navigate('/')}
                className=' rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center'>
                BACK</button>
            </div>
      
    </div>
  )
}

export default Highscore
