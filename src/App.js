import React from 'react'
import './App.css';
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Main2 from './Components/Main2/Main2'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Main/>
    <Main2/>
    <Footer/> 
    </>
  );
}

export default App;
