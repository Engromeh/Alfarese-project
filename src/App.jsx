
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Login from './Component/Pages/Login/Login'
import Singup from './Component/Pages/Singup/Singup'
import ArticlePage from './Component/Pages/ArticlePage/ArticlePage'


function App() {

  return (
    <>

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/singup' element={<Singup/>} />
<Route path='/ArticlePage' element={<ArticlePage />} />


</Routes>
    </>
  )
}

export default App
