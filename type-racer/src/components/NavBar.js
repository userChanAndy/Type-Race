import React from 'react'
import Data from "./Data";
import HomePage from "./HomePage"
import Settings from "./Settings";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TextDisplayed from './TextDisplayed';

function NavBar() {


    return (
        <Router>
            <div id= "navBarContainer">
                <nav id = "navBar">
                    <button className = "navBtn"><Link to = "/">Home</Link></button>
                    <button className = "navBtn"><Link to = "/Race">Race</Link></button>
                    <button className = "navBtn"><Link to = "/Data">Data</Link></button>
                    <button className = "navBtn"><Link to = "/Settings">Settings</Link></button>
                </nav>
                <Routes>                   
                    <Route path ="/" element={<HomePage/>}/>
                    <Route path ="/Race" element={<TextDisplayed/>}/>
                    <Route path ="/Data" element={<Data/>}/>
                    <Route path ="/Settings" element={<Settings/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default NavBar
