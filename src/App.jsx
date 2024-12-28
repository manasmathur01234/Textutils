import Home from "./Home";
import About from "./components/about";
import {BrowserRouter,Route,Routes } from "react-router-dom";
import React from 'react'


const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About />}></Route>
          {/* <Route index element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
