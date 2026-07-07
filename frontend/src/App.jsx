import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from './pages/CreatePost';
import Feed from './pages/feed';

const App = () => {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<CreatePost/>} />
          <Route path='feed' element={<Feed/>}/>
          <Route path='about' element={<h1>about page</h1>}/>
        </Routes>
      </Router>

  )
}

export default App
