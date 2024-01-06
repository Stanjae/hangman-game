import { useEffect, useState } from 'react'
import { alphabets } from './helper/alphakeys'
import { randomWords } from './helper/wordBank'

/* const text = 'majority'
const textArr = text.split("")
const newArr = new Array(text.length).fill(' ') */

//get a random word
const getRandomWords = () => (randomWords[Math.floor(Math.random() * randomWords.length)])

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

function App() {
  //get & initialize random word;
  const [guessWord, setguessWord] = useState(getRandomWords())
  const newArr = new Array(guessWord.length).fill(' ');
  const [randomWord, setRandomWord] = useState(newArr)
  const [errorkeys, setErrorkeys] = useState('');
  const [power, setPower] = useState(5);
  const [rightwords, setRightwords] = useState('');

  

  const OnButtonClick =(keey)=>{
    let smallkey = keey.toLowerCase();
    let newWord;
    if(guessWord.includes(smallkey)){
     newWord = CheckForOccurrences(smallkey, guessWord);
     let changedword = randomWord.map((item, index) => (index === newWord[index]? smallkey : item))
     setRandomWord(changedword)
     setRightwords(prevRightword => prevRightword + smallkey);
     if(arraysAreEqual(changedword, guessWord.split(""))){
      console.log('you won')
     }
    }else{
      setErrorkeys(prevError => prevError + smallkey)
      const oper = power -1;
      setPower(oper);
      if(oper === 0){
        console.log('you lost!!')
      }
    }
  };

  const OnRestart = ()=>{
    let justin = getRandomWords();
    let ohms = new Array(justin.length).fill(' ');
    setguessWord(justin);
    setRandomWord(ohms);

  };

  console.log(rightwords)
  

  return (
    <div className=' w-full h-screen bg-gray-200 flex  flex-col  justify-center items-center gap-4'>
      <div className=' flex w-4/5 justify-between'>
        <h2 className=' font-medium text-xl'>Hint: {guessWord}</h2>
        <button onClick={OnRestart} className=' px-2 py-1 bg-red-500 text-white'>Restart</button>
        <h2 className=' font-medium text-xl '>LIFE: <span className='text-red-700'>{power}</span></h2>
        <h2 className=' font-medium text-xl '>Wrong keys: <span className='text-red-700'>{errorkeys}</span></h2>
      </div>

      <div className=' w-4/5  flex justify-center p-5 items-center gap-4'>
        {randomWord.map((item, index)=> <div key={index} className=' border-b-8 border-blue-950 p-2 w-20 bg-slate-50 '>
            <span className=' p-2 text-2xl text-slate-900'>{item}</span>
            </div>)}
      </div>

      <div className=' w-4/5 p-2 gap-1 grid grid-cols-12'>
      {alphabets.map((alphabet, index)=>(
        <div key={index} className=' col-span-2'>
          <button  onClick={()=> OnButtonClick(alphabet)} 
          className={`${rightwords.includes(alphabet.toLowerCase) ? 'bg-slate-900':'bg-slate-700'} p-2 w-full block mx-auto hover:bg-slate-900 text-white font-semibold text-xl`}>{alphabet}</button>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default App
