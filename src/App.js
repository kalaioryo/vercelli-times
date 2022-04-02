import React, {useEffect} from 'react';
import {Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { dayNight } from './actions';


import './style/App.css';
import Header from './containers/navbar/NavbarContainer';
import Home from './pages/Home';
import Footer from './containers/Footer';
import SectionPage from './pages/SectionPage';
import NotFoundPage from './pages/NotFoundPage';
import Search from './pages/Search';

const API_VERSION = process.env.REACT_APP_VERSION
const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

// const moonSun = useSelector(state => state.dayNigth);
//https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yourkey
//https://cors-anywhere.herokuapp.com/

//https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
function App() {
  // const moonSun = useSelector(state => state.dayNigth);
  // const dayNight = useSelector(state => state.dayNight);

  return (
    <div>
      {/* <h1>{API_KEY}</h1> */}
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='section/:section' element={<SectionPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='search/' element={<Search/>} />
        </Routes>
        {/* <Home/> */}
        <Footer/>
    </div>
  );
}

export default App;
