import react from "react";
import HomePage from "./HomePage";
import Data from "./Data";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = { <HomePage/> }/>
          <Route path = "/Data" element = { <Data/> }/>
          <Route path = "/LogIn" element = { <LogIn/> }/>
          <Route path = "/SignUp" element = { <SignUp/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
