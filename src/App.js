import React, {useEffect} from 'react';
import {Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './style/App.css';
// import darkCss from './style/darkMode.module.css';
// import lightCss from './style/lightMode.module.css';

import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import SectionPage from './pages/SectionPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import ArticlePage from './pages/ArticlePage';

const API_VERSION = process.env.REACT_APP_VERSION
const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;


// const moonSun = useSelector(state => state.dayNigth);
//https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yourkey
//https://cors-anywhere.herokuapp.com/

//https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
function App() {
  // const mode = useSelector( state => state.darkMode);
  // const dark = darkCss.darkMode;
  // const light = lightCss.lightMode;

  

  // const moonSun = useSelector(state => state.dayNigth);
  // const dayNight = useSelector(state => state.dayNight);

  return (
    < >
        <Header/>
          <section className='content'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='section/:section' element={<SectionPage/>}>
                <Route path=':subSection' element={<SectionPage/>}/>
              </Route>
              <Route path='*' element={<NotFoundPage/>}/>
              <Route path='search/:query' element={<SearchPage/>}>
                {/* <Route path=':query' element={<SearchPage/>}/> */}
              </Route>
              <Route path='article/' element={<ArticlePage/>}/>
          </Routes>
          </section>       
        <Footer/>
    </>
  );
}

export default App;
