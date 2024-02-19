import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar/Navbar";
import Todos from "./components/Navbar/Todos";
import Comments from "./components/Navbar/Comments";
import Albums from "./components/Navbar/Albums";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/todos" element={<Todos />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
