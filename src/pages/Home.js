import React from 'react';

import useFetchArticle from '../service/fetchApiArticle';

import MainNews from '../components/homepage-components/MainNews';
import SideNews from '../components/homepage-components/SideNews';
import MoreNews1 from '../components/homepage-components/MoreNews1';
import MoreNews2 from '../components/homepage-components/MoreNews2';
import CategorySection from '../components/homepage-components/CategorySection';

import RenderArticles from '../components/articles-components/RenderArticles';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';
import CategoryNews from '../components/articles-components/CategoryNews';

import style from './home.module.css'

const API_KEY = process.env.REACT_APP_API_KEY

function Home() {
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

  const {isLoading, hasError, errorMessage} = useFetchArticle(url);

  if (hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>

  return (

    <div className={style.body}>

      {/* ###### Top News ###### */}

      <div className={style.topNews} >

        {/* ##### Main News Section ##### */}
        
        {/* <MainNews/> */}

      {/* ##### Side News section #####*/}

      {/* <SideNews/> */}
      
    </div>

    <div className={style.moreNewsContainer}>
      {/* <MoreNews1/> */}
    </div>

      <div className={style.borderHorizontal}></div>

      <div className={style.moreNewsContainer}>
        {/* <MoreNews2/> */}
      </div>
      <div className={style.borderHorizontal}></div>

    <h3>Well</h3>
    <div className={style.wellCategory}>
      <RenderArticles typeArticle={'article'} section={'well'}/>
    </div>

    <div className={style.categoryNewsSection}>

      <h3>News</h3>

      {/* <CategorySection/> */}
  
      

    </div>

    </div>
  );
}

export default Home;
