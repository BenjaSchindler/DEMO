import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Nav from './Components/nav';
import Blog from './Routes/Blog';


const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
