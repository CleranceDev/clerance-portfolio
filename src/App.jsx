import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
