

import { RecoilRoot } from 'recoil'
import './App.css'

import { TodoPage } from './pages/TodoPage'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Newtodo } from './pages/Newtodo'

function App() {


  return (
    <RecoilRoot>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/todo' element={<TodoPage/>}/>
      <Route path='/newtodo' element={<Newtodo/>} />
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
    
  )
}

export default App
