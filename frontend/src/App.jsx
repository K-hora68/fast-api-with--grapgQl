
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <>
    <h1> Hello world</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App