import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import Login from './Routes/LogIn';
import UserProfile from './Components/UserProfile';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Te } from "./Routes/Te"
import { Accesorios } from "./Routes/Accesorios"
import { Chocolate } from "./Routes/Chocolate"

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="/te" element={<Te />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route
              path="/user/:id"
              element={<UserProfile/>}
            />
      </Routes>
      <Footer/>
      </ShoppingCartProvider>
  );
};

export default App;
