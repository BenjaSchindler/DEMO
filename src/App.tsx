import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import Te from './Routes/Te';

const App = () => {
  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Te" element={<Te />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
