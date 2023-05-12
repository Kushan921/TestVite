import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App'
import './index.css'
import Test from './Test'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/test" exact element = {<Test/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
