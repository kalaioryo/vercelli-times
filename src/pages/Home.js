import React from 'react';

import useFetchArticle from '../service/fetchApiArticle';

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
        <div className={style.mainNews}>
          <section className={style.container}>
            <RenderArticles slot={0} typeArticle={'article'} />
            <RenderArticles slot={1} typeArticle={'abstract'}/>
            <div className={style.borderHorizontal}></div>
            <RenderArticles slot={2} typeArticle={'abstract'}/>
            <div className={style.borderHorizontal}></div>
            <RenderArticles slot={3} typeArticle={'abstract'}/>

          </section>
          <section className={style.container}>
            <RenderArticles slot={0} typeArticle={'figcaption'}/>

          </section>
          
          <section className={style.container}>
            <RenderArticles slot={4} typeArticle={'abstract'}/>
            <div className={style.borderHorizontal}></div>
            <RenderArticles slot={5} typeArticle={'abstract'}/>
            <div className={style.borderHorizontal}></div>
            <RenderArticles slot={6} typeArticle={'abstract'}/>
            <div className={style.borderHorizontal}></div>
            <RenderArticles slot={7} typeArticle={'abstract'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={4} typeArticle={'figcaption'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={8} typeArticle={'article'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={8} typeArticle={'figcaption'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={9} typeArticle={'article'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={9} typeArticle={'figcaption'}/>
          </section>
          

          <section className={style.covidSection}>
            <div>Covid Section</div>
          </section>
                
          <section className={style.container}>
            <RenderArticles slot={10} typeArticle={'article'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={10} typeArticle={'figcaption'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={11} typeArticle={'article'}/>
          </section>

          <section className={style.container}>
            <RenderArticles slot={11} typeArticle={'figcaption'}/>
          </section>
      </div>

      <div className={style.borderVertical} ></div>

      {/* ##### Side News section #####*/}

      <div className={style.sideNews}>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'opinion'}/>
        <div className={style.borderHorizontal}></div>
        <h3>Opinion</h3>
        <RenderArticles typeArticle={'title'} section={'opinion'}/>
        <div className={style.borderHorizontal}></div>
        <RenderArticles typeArticle={'article'} restNews={'side-more-news'}/>
      </div>
    </div>

    <div className={style.moreNewsContainer}>
      <h1>More news</h1>
      <div className={style.mainMoreNews}>
        <div>
          <RenderArticles slot={12} typeArticle={'figcaption'}/>
          <RenderArticles slot={12} typeArticle={'article'}/>
        </div>
        <div>
          <RenderArticles typeArticle={'article'} restNews={'more-news-1'}/>
        </div>
      </div>
    </div>

      <div className={style.borderHorizontal}></div>

      <div className={style.moreNewsContainer}>
        <h1>More news 2</h1>
        <div className={style.mainMoreNews}>
          <div>
            <RenderArticles slot={13} typeArticle={'figcaption'}/>
            <RenderArticles slot={13} typeArticle={'article'}/>
          </div>
          <div>
            <RenderArticles typeArticle={'article'} restNews={'more-news-2'}/>
          </div>
        </div>
      </div>
      <div className={style.borderHorizontal}></div>

    
    <div className={style.categoryNewsSection}>
      <RenderArticles typeArticle={'article'} section={'well'}/>
    </div>

    <div className={style.categoryNewsSection}>

      <h3>News</h3>
  
      <CategoryNews section={'world'} category={'World news'}/>
      <CategoryNews section={'us'} category={'U.S. News'}/>
      <CategoryNews section={'politics'} category={'U.S. Politics'}/>
      <CategoryNews section={'nyregion'} category={'New York'}/>
      <CategoryNews section={'business'} category={'Business'}/>
      <CategoryNews section={'technology'} category={'Technology'}/>
      <CategoryNews section={'science'} category={'Science'}/>
      <CategoryNews section={'sports'} category={'Sports'}/>
      <CategoryNews section={'obituaries'} category={'Obituaries'}/>   

      <CategoryNews section={'opinion'} category={'Opinion'}/>
      <CategoryNews subSection={'columnist'} category={'Columnist'}/>
      <CategoryNews subSection={'editorials'} category={'Editorials'}/>
      <CategoryNews subSection={'contributors'} category={'Guest Essays'}/>
      <CategoryNews subSection={'sunday'} category={'Sunday Review'}/>

      <CategoryNews section={'arts'} category={'Arts'}/>
      <CategoryNews subSection={'design'} category={'Art & Design'}/>
      <CategoryNews subSection={'movies'} category={'Movies'}/>
      <CategoryNews subSection={'television'} category={'Television'}/>
      <CategoryNews subSection={'music'} category={'Music'}/>
      <CategoryNews subSection={'theater'} category={'Theater'}/>
      <CategoryNews subSection={'dance'} category={'Dance'}/>

    </div>

    </div>
  );
}

export default Home;
