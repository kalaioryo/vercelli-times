import React from 'react';
import {Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import SectionPage from './pages/SectionPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import ArticlePage from './pages/ArticlePage';

import './style/App.css';

function App() {

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
              </Route>
              <Route path='article/' element={<ArticlePage/>}/>
          </Routes>
          </section>       
        <Footer/>
    </>
  );
}

export default App;
