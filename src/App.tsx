import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import Login from './Routes/LogIn';
import { useState } from 'react';
import { getCookie } from './Services/CookiesHelper';

const App = () => {
  const token = getCookie('token')
  console.log(token)
  function isAuthorized() {
    if (token == undefined){
      return false
    }else{return true}
  }

  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
