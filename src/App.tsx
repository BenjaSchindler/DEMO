import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Blog from './Routes/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Navigationbar';

const App = () => {
  return (
    <>
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
