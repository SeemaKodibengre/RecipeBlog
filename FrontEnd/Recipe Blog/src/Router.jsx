import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import ForgetPassword from './ForgetPassword'

function Router() {
  return (
   < BrowserRouter>
   <Routes>
    <Route  path='/' element={<Register/>}/>
    <Route  path='login'element={<Login/>}/>
    <Route path='password' element={<ForgetPassword/>}/>
   </Routes>
   </BrowserRouter>
   
  )
}

export default Router