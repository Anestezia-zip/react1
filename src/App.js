import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Comments from "./class-components/Comments";
import Photos from "./class-components/Photos";
import Posts from "./class-components/Posts";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
