import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Root/Index'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home/Index'
import Credits from './Pages/Credits/Index'
import PlayForm from './Pages/PlayForm/Index'
import Highscore from './Pages/Highscore/Highscore'
import Game from './Pages/Game/Game'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/hangman/",
    element: <Index/>,
    errorElement: <ErrorPage/>,
    children:[
      {index:true, element:<Credits/>},
      {path:'play', element:<PlayForm/>},
      {path:'highscore', element:<Highscore/>}
    ]
  },
  {path:'/game/', errorElement:<ErrorPage/>, element:<Game/>}
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
