import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

// import Logini from './Pages/Logini'
// import Detailpage from './Pages/Detailpage'
import Navbar from './Component/Navbar'
import Products from './Pages/Products'
import Userget from './Pages/Userget'
import Error from './Pages/Error'
import Register from './Pages/Register'
import Detail from './Pages/Detail'
import EditUser from './Pages/EditUser'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        
          
          <Route path='/products' element={<Products />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Database' element={<Userget/>} />
         <Route path='/detail/:id' element={<Detail/>}/>
         <Route path='/edit/:id' element={<EditUser/>}/>
          <Route path='*' element={<Error />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
