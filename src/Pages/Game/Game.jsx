import React, { useState } from 'react'
import {randomWords} from '../../helper/wordBank'
import HangMan from '../../assets/logo.png'
import {alphabets} from '../../helper/alphakeys'
import { useNavigate } from 'react-router-dom'
import FunModat from '../../Components/FunModat'
import Mayday from '../../Components/mayday'

//get a random word
const getRandomWords = () => (randomWords[Math.floor(Math.random() * randomWords.length)])

const jug = " M88.7,59.1L74,53.6v-4.8c5.7-1,10-5.9,10-11.8s-4.3-10.9-10-11.8V7c0-1.1-0.9-2-2-2H24c-1.1,0-2,0.9-2,2v84H12  c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2s-0.9-2-2-2H26V27.8L44.8,9H70v16.2c-5.7,1-10,5.9-10,11.8s4.3,10.9,10,11.8v4.8  l-14.7,5.5c-1,0.4-1.6,1.5-1.2,2.6c0.3,0.8,1.1,1.3,1.9,1.3c0.2,0,0.5,0,0.7-0.1l13.3-5v16.4l-9.5,11.4c-0.7,0.8-0.6,2.1,0.3,2.8  c0.4,0.3,0.8,0.5,1.3,0.5c0.6,0,1.1-0.2,1.5-0.7L72,78.1l8.5,10.2c0.4,0.5,1,0.7,1.5,0.7c0.5,0,0.9-0.2,1.3-0.5c0.8-0.7,1-2,0.3-2.8  L74,74.3V57.9l13.3,5C87.5,63,87.8,63,88,63c0.8,0,1.6-0.5,1.9-1.3C90.3,60.7,89.7,59.5,88.7,59.1z M26,22.2V9h13.2L26,22.2z M64,37  c0-4.4,3.6-8,8-8s8,3.6,8,8s-3.6,8-8,8S64,41.4,64,37z"


//check the occurences of a letter in a word
const CheckForOccurrences = (letter, word) =>{
  let occurences = []
  let letterIndex;
  for(let i = 0; i < word.length; i++){
    if(word[i] === letter){
      letterIndex = word.indexOf(word[i], i)
      occurences.push(letterIndex)

    }else{
      occurences.push('june')
    }
  }
  return occurences;
};

function arraysAreEqual(array1, array2) {
  return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}

const genUsers = JSON.parse(localStorage.getItem('users'))

const Game = () => {
    const [guessWord, setguessWord] = useState(getRandomWords())
  const newArr = new Array(guessWord.length).fill(' ');
  const [randomWord, setRandomWord] = useState(newArr)
  const [errorkeys, setErrorkeys] = useState('');
  const [power, setPower] = useState(5);
  const [rightwords, setRightwords] = useState('');
  const[score, setScore] = useState(0)
  const [level, setLevel] = useState(1)

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('loggedinUser') || {}))


  const navigate = useNavigate()

  //for toogle of modals
  const [popup, setpopup] = useState({title:'', ceescore:0})

  //hints
  const [hints, setHints] = useState(2);

  //for image render
  const [image, setImage] = useState(0)

  const getMoreHints = ()=>{
    if(score > 0){
      setScore(prev => prev - 5);
      setHints(prev => prev + 1)
    }
  }



  const OnButtonClick =(keey)=>{
    let smallkey = keey.toLowerCase();
    let newWord;
    if(guessWord.includes(smallkey)){
     newWord = CheckForOccurrences(smallkey, guessWord);
     let changedword = randomWord.map((item, index) => (index === newWord[index]? smallkey : item))
     setRandomWord(changedword)
     setRightwords(prevRightword => prevRightword + smallkey);
     if(arraysAreEqual(changedword, guessWord.split(""))){
      const ion = score + 10;
      setScore(ion);
      NextLevel();
      if(level === Number(currentUser?.levels)){
        setpopup({title:'Congrats, You won!!', ceescore:ion})
        UpdateUserScores(score)
        return
      }
     }
    }else{
      setErrorkeys(prevError => prevError + smallkey)
      const powerr = power -1;
      setPower(powerr);
      setImage(prev => prev + 18)
      if(powerr === 0 ){
        setpopup({title:'Ahh, you Lost!!', ceescore:score})
      }
    }
  };

  const NextLevel = ()=>{
    let justin = getRandomWords();
    let ohms = new Array(justin.length).fill(' ');
        setguessWord(justin);
        setRandomWord(ohms);
        if(level <= Number(currentUser?.levels)){
            setLevel(prev => (prev === Number(currentUser?.levels) ? prev : prev + 1))
            setHints(2);
        }
        
  };

  const HandleLogOut =()=>{
    let session = {}
    localStorage.setItem('loggedinUser', JSON.stringify(session));
    navigate('/');
  }

  const UpdateUserScores =(pub)=>{
    const curentdata = {...currentUser, highscore:[...currentUser.highscore, pub]}
    const updatedUsers = genUsers.map(item=> (item.username === curentdata.username ? curentdata : item))
    localStorage.setItem('loggedinUser', JSON.stringify(curentdata))
    localStorage.setItem('users', JSON.stringify(updatedUsers))

  }


  return (
    <div className=" w-full bg-[#112444] h-full sm:h-screen">
      <div className=" py-4 md:py-7 grid grid-cols-12">
        <div className=' flex items-center md:col-span-12 col-span-6'>
          <span className=" bg-blue-500 text-white font-medium py-2 px-10">
                    Level: {level}
          </span>
        </div>
        <div className='md:hidden px-2 col-span-6'>
          <Mayday getMoreHints={getMoreHints} HandleLogOut={HandleLogOut}/>
        </div>
      </div>

      <div className='flex px-6 pb-2 md:hidden gap-2 flex-1 justify-center'>
                <h1 className=' text-lg text-white font-extrabold text-center '>&#128142;</h1>
                <h2 className=' text-xl text-blue-500 font-bold text-center'>{score}</h2>
      </div>

      <div className="md:hidden my-3 grid grid-cols-12">
        <div className=' px-3 flex items-center col-span-6'>
          <h1 className=" my-2 text-blue-100 text-lg font-semibold text-center">
            Hint : Starts with <span className=' text-blue-600 font-semibold italic'>"{guessWord.toUpperCase().slice(0,hints)}"</span>
          </h1>
        </div>
        <div className='px-2 col-span-6'>
          <div className=" py-5 gap-2 flex justify-center flex-1 ">
              <h5 className=' hidden md:block text-lg font-bold text-white'> Lives:</h5>
              <div class="flex items-center">
                {new Array(power).fill(" ").map((item) => (
                  <span>&#128150;</span>
                ))}
              </div>
            </div>
        </div>
      </div>

      {/* main section */}

      <div className=" grid grid-cols-12 w-full ">
        <div className=" col-span-12 md:col-span-8">
          <h1 className=" text-white text-2xl font-semibold text-center">
            Guess the Word
          </h1>

          <div className="  flex justify-center p-5 items-center gap-4">
            {randomWord.map((item, index) => (
              <div
                key={index}
                className=" border-b-4 border-blue-500 p-2 w-14 "
              >
                <span className=" p-2 text-2xl text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-5">
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" 
              style={{ fill:"white", width:'200px', display:'block', margin:'auto'}} xml:space="preserve">
              <path d=" M88.7,59.1L74,53.6v-4.8c5.7-1,10-5.9,10-11.8s-4.3-10.9-10-11.8V7c0-1.1-0.9-2-2-2H24c-1.1,0-2,0.9-2,2v84H12  c-1.1,0-2,0.9-2,2s0.9,2,2,2h24c1.1,0,2-0.9,2-2s-0.9-2-2-2H26V27.8L44.8,9H70v16.2c-5.7,1-10,5.9-10,11.8s4.3,10.9,10,11.8v4.8  l-14.7,5.5c-1,0.4-1.6,1.5-1.2,2.6c0.3,0.8,1.1,1.3,1.9,1.3c0.2,0,0.5,0,0.7-0.1l13.3-5v16.4l-9.5,11.4c-0.7,0.8-0.6,2.1,0.3,2.8  c0.4,0.3,0.8,0.5,1.3,0.5c0.6,0,1.1-0.2,1.5-0.7L72,78.1l8.5,10.2c0.4,0.5,1,0.7,1.5,0.7c0.5,0,0.9-0.2,1.3-0.5c0.8-0.7,1-2,0.3-2.8  L74,74.3V57.9l13.3,5C87.5,63,87.8,63,88,63c0.8,0,1.6-0.5,1.9-1.3C90.3,60.7,89.7,59.5,88.7,59.1z M26,22.2V9h13.2L26,22.2z M64,37  c0-4.4,3.6-8,8-8s8,3.6,8,8s-3.6,8-8,8S64,41.4,64,37z"/>
              </svg>
          </div> */}
          <svg className=' w-28 md:w-48' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" 
              style={{ fill:"white", display:'block', margin:'auto'}} xml:space="preserve">
              <path d={jug.split(",").slice(0, image)}/>
              </svg>
          </div>

          <div className=" mx-auto w-full  md:w-4/5 p-5 gap-1 grid grid-cols-12">
            {alphabets.map((alphabet, index) => (
              <div key={index} className=" col-span-1">
                <button
                  onClick={() => OnButtonClick(alphabet)}
                  className={`${
                    rightwords.includes(alphabet.toLowerCase)
                      ? "bg-slate-900"
                      : "bg-slate-700"
                  } p-2 w-full block mx-auto hover:bg-slate-900 text-white font-semibold text-base`}
                >
                  {alphabet}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className=" px-5 md:border-l-2 md:border-slate-400 col-span-12 md:col-span-4">

          <div class="w-full hidden md:block py-2 mx-auto max-w-sm border-b-2 rounded-lg shadow ">
              <div class="flex flex-col items-center pb-4">
                  <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <span class="font-medium text-gray-600 dark:text-gray-300">{currentUser?.username?.toUpperCase().slice(0,2)}</span>
                  </div>
                  <h5 class="mb-1 text-xl font-medium text-blue-500 ">{currentUser?.username}</h5>
                  
              </div>
          </div>

          <h1 className=" hidden md:block my-3 text-blue-100 text-xl font-semibold text-center">
            Hint : Starts with <span className=' text-blue-600 font-semibold italic'>"{guessWord.toUpperCase().slice(0,hints)}"</span>
          </h1>

          <div className=" py-5 gap-2 hidden md:flex justify-center flex-1 ">
            <h5 className=' text-lg font-bold text-white'> Lives:</h5>
            <div class="flex items-center">
              {new Array(power).fill(" ").map((item) => (
                <svg
                  class="w-4 h-4 text-blue-500 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
            </div>
          </div>

          <div className=' md:px-5 space-y-4 justify-center gap-4 md:gap-0 gap-y-4 flex md:flex-col'>
            <button type='button' onClick={getMoreHints}
                className=" hidden md:block rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center"
                    >
                    Get More Hints!!
            </button>

            <button type='button' onClick={()=> navigate('/hangman/highscore')}
                className=" hidden md:block rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center"
                    >
                    HighScore
            </button>

            <div className=' hidden p-6 md:flex gap-5 flex-1 flex-col'>
                {/* <h1 className=' text-4xl text-white font-extrabold italic text-center '></h1> */}
                <h2 className=' text-3xl text-blue-500 font-bold text-center'> &#128142; {score}</h2>
            </div>

            <button type='button' onClick={HandleLogOut}
                className=" md:block hidden rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center"
                    >
                    Quit
            </button>

          </div>
        </div>
      </div>

      {/* modal area */}
      {popup.title && <FunModat popup={popup} setpopup={setpopup}/>}
      {/* <svg
                    class="w-4 h-4 text-blue-500 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg> */}
    </div>
  );
}

export default Game
