import logo from './logo.svg';
import './App.css';
import Roster from "./components/Roster.js"

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NoPage from "./pages/NoPage";



const roster = [
    { name: 'Cabbage', imagePath: '../images/woman.tiff'},
    { name: 'Garlic', imagePath: '../images/man.tiff'},
    { name: 'Apple', imagePath: '../images/brotha.tiff'}
  ];


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home people={roster}/>}/>
            {roster.map((person,id) => {
              return <Route path={"profile-"+id} element={<Profile id={id} person={person}/>}/>
            })}
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
