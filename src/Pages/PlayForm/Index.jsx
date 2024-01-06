import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const levels = [5,10,15]

const PlayForm = () => {
    const navigate = useNavigate()

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

    const [userInfo, setUserInfo] = useState({username:'', levels:0, highscore:[]})

    const levelChange=(e)=>{
       setUserInfo(prev => ({...prev, [e.target.name]: e.target.value}))

    }

    const HandleSubmit = (e)=>{
        e.preventDefault();
        let opensea;
        const getuser = users.find(item => item.username === userInfo.username)
        if(getuser){
            localStorage.setItem('loggedinUser', JSON.stringify(getuser));
        }else{
            opensea = [...users, userInfo]
            localStorage.setItem('users', JSON.stringify(opensea));
            localStorage.setItem('loggedinUser', JSON.stringify(userInfo));
        }
        navigate('/game')
        
    }

    console.log(userInfo)
  return (
    <section className=" py-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-center mb-4 leading-tight tracking-tight text-gray-50 md:text-2xl ">
              Enter your Player's credentials
            </h1>
            <form onSubmit={(e)=> HandleSubmit(e)} className="space-y-5 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-base font-medium text-blue-600 dark:text-white"
                >
                  Player's name
                </label>
                <input
                  type="text"
                  onChange={(e)=> levelChange(e)}
                  value={userInfo.username}
                  name="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-blue-600 block w-full p-4 "
                  placeholder="name@company.com"
                  required
                />
              </div>

              <h3 class="mb-4 font-semibold text-base text-center text-blue-600 dark:text-white">
                Number of Levels
              </h3>
              <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {levels.map((item, index)=>(
                    <li key={index} class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div class="flex items-center ps-3">
                    <input
                      onChange={(e)=> levelChange(e)}
                      id="horizontal-list-radio-id"
                      type="radio"
                     required
                      value={item}
                      name="levels"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "
                    />
                    <label
                      for="horizontal-list-radio-id"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {item}
                    </label>
                  </div>
                </li>
                ))}
                
              
              </ul>

              <div className=" p-2 flex flex-1 justify-center gap-x-6">
                <button type='button'
                  onClick={() => navigate("/")}
                  className=" rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center"
                >
                  BACK
                </button>

                <button type='submit'
                  className=" rounded-xl border-2 border-white py-2 px-4 hover:bg-white hover:text-slate-950 text-white font-medium text-lg text-center"
                >
                  PLAY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayForm
