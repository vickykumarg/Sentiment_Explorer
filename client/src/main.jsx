import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import Learn from './pages/Learn.jsx'
import Practice from './pages/Practice.jsx'
import Quiz from './pages/Quiz.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="learn" element={<Learn/>}/>
          <Route path="practice" element={<Practice/>}/>
          <Route path="quiz" element={<Quiz/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
