import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CocktailList from './pages/CocktailList'
import CocktailDetail from "./pages/CocktailDetail"

function App() {

  return (
    <>
     <Navbar />
     <SideBar />

     <Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/cocktails' element={<CocktailList />} />
       <Route path="/cocktails/:cocktailId" element={<CocktailDetail/>} />
     </Routes>

     <Footer />
    </>
    
  )
}

export default App
