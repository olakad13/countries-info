import { useState, useEffect, useRef } from 'react'
import Home from './pages/Home.jsx'
import './App.css'
import countriesData from './pages/Data/data.json'
import Context from './utilities/Context.jsx'
import Header from './components/Header/Header.jsx'
import Country from './pages/Country.jsx'
import {Routes,Route, Link} from "react-router-dom"

function App() {
  
  const [isDark, setIsDark] = useState(true)
  const [countries , setCountries] = useState(countriesData)
  const unchangedData = useRef(countriesData)

  

  const updateIsDark = (data) => {
    setIsDark(data)
  }
  const updateCountries = (data) => {
    setCountries(data)
  }
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)";
    document.body.style.color = isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)";
  },[isDark])

  return (
    <>
      <Context.Provider value={{ isDark, updateIsDark, countries, updateCountries, unchangedData }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/country" element={<Country />}/>
        </Routes>
      </Context.Provider>
    </>
  )
}

export default App
