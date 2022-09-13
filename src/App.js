// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import Departments from './components/Departments/Departments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import Home from './pages/Home';

function App() {
  return (
    <div className='main'>
      <Header></Header>
     <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes> 
        <Footer></Footer>
    </div>
  );
}

export default App;
