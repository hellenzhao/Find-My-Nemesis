import {BrowserRouter, Route, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="App">
            <div class='header'>
                <Link to="/">
                    <img class='logo' src='../images/logo.png'></img>
                    <h1>Find My Nemesis</h1>
                </Link>
            </div>
      </div>
        
    )
}