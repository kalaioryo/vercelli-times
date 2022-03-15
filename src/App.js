import React, {useEffect} from 'react';
import axios from 'axios';
import {Switch, Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { dayNight } from './actions';


import './style/App.css';
import Header from './containers/header/HeaderContainer';
import Home from './containers/Home';
import Footer from './containers/Footer';
// import ArticleListing from './components/ArticleListing';
import Article from './components/articles-components/Article';
// import ArticleDetail from './components/SectionPage';
import useFetchArticle from './service/fetchApi';
import SectionPage from './components/SectionPage';

const API_VERSION = process.env.REACT_APP_VERSION
const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

// const moonSun = useSelector(state => state.dayNigth);
//https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yourkey
//https://cors-anywhere.herokuapp.com/

//https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
function App() {
  useFetchArticle(url);

  // const moonSun = useSelector(state => state.dayNigth);
  // const dayNight = useSelector(state => state.dayNight);

  return (
    <div>
      {/* <h1>{API_KEY}</h1> */}
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='article' element={<Article/>}/> */}
          <Route path='section' element={<SectionPage/>}/>
        </Routes>
        {/* <Home/> */}
        <Footer/>
    </div>
  );
}

export default App;
