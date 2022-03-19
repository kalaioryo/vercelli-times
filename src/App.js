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
// import ArticleDetail from './components/SectionPage';
import useFetchArticle from './service/fetchApi';
import SectionPage from './containers/SectionPage';
import SectionPageContainer from './containers/header/SectionPageContainer';

const sectionList = [
  {id: 1, name: 'World', queryUrl:'world'},
  {id: 2, name: 'U.S.', queryUrl:'us'},
  {id: 3, name: 'Politics', queryUrl:'politics'},
  {id: 4, name: 'N.Y.', queryUrl:'ny'},
  {id: 5, name: 'Business', queryUrl:'business'},
  {id: 6, name: 'Opinion', queryUrl:'opinion'},
  {id: 7, name: 'Tech', queryUrl:'tech'},
  {id: 8, name: 'Science', queryUrl:'science'},
  {id: 9, name: 'Health', queryUrl:'health'},
  {id: 10, name: 'Sports', queryUrl:'sports'},
  {id: 11, name: 'Arts', queryUrl:'arts'},
  {id: 12, name: 'Books', queryUrl:'books'},
  {id: 13, name: 'Style', queryUrl:'style'},
  {id: 14, name: 'Food', queryUrl:'food'},
  {id: 15, name: 'Travel', queryUrl:'travel'},
  {id: 16, name: 'Magazine', queryUrl:'magazine'},
  {id: 17, name: 'T Magazine', queryUrl:'t-magazine'},
  {id: 18, name: 'Real Estate', queryUrl:'real-estate'}

]

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
          {/* <Route path='article' element={<Article/>}/> */}
          <Route path='section/:section' element={<SectionPage/>}/>
        </Routes>
        {/* <Home/> */}
        <Footer/>
    </div>
  );
}

export default App;
