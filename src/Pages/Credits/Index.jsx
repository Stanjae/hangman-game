import React from 'react'
import { useNavigate } from 'react-router-dom';

const Credits = () => {
    const navigate= useNavigate()
  return (
    <div className=' p-10 w-full'>
      <div className=' p-5 max-w-5xl mx-auto'>
        <h1 className=' mb-4 text-4xl font-bold text-white text-center'>Hangman Game - Credits</h1>
        <p className=' text-center text-blue-700 text-xl font-medium'>
          Thank you for playing the Hangman game! This project was created by: Stanjhae
        </p>
        <ul className=' py-4 mb-4 text-blue-50 font-normal space-y-3 text-base text text-center'>
          <li>Game Design and Development: Stanjhae</li>
          <li>Word Database: WordAPI (https://www.wordapi.com/)</li>
          <li>Graphics and Design: Graphic Artist's Name</li>
          <li>Sound Effects: Sound Designer's Name</li>
        </ul>
        <p className=' text-center text-blue-600 text-lg font-medium'>If you have any feedback or suggestions, feel free to contact us:</p>
        <p className=' mb-10 text-center text-blue-50 text-lg font-medium'>Email: stanykhay29@gmail.com</p>
       
        <p className=' text-center text-blue-50 text-2xl font-medium'>Thank you for your support!</p>
      </div>
      <div className=' p-2 flex flex-1 justify-center gap-x-6'>
                <button onClick={()=> navigate('/')}
                className=' rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center'>
                BACK</button>
            </div>
    </div>
  );
}

export default Credits