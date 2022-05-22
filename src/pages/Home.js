import React, { useEffect, useState } from 'react';
import style from './home.module.css'

import useFetchArticle from '../service/fetchApiArticle';

import RenderArticles from '../components/articles-components/RenderArticles';
import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../components/ErrorComponent';

const API_KEY = process.env.REACT_APP_API_KEY

function Home() {
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

  const {isLoading, hasError, errorMessage} = useFetchArticle(url);

  if (hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>

  // Const for select size of image
  const large = 0; //'large';
  const middle = 1; //'middle';    
  const small = 2; //'small';


  let slot = 0;
  let image = null;
  let sectionName = '';

  return (

    <div className={style.body}>
      <div className={style.topNews} >
        <div className={style.mainNews}>
          <section className={style.container}>
            <RenderArticles slot={0} typeArticle={'article'} />
            <RenderArticles slot={1} typeArticle={'abstract'}/>
            <RenderArticles slot={2} typeArticle={'abstract'}/>
            <RenderArticles slot={3} typeArticle={'abstract'}/>

          </section>
          <section className={style.container}>
          <RenderArticles slot={0} typeArticle={'figcaption'}/>

          </section>
          
          <section className={style.container}>
            <RenderArticles slot={4} typeArticle={'abstract'}/>
            <RenderArticles slot={5} typeArticle={'abstract'}/>
            <RenderArticles slot={6} typeArticle={'abstract'}/>
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
      <div className={style.sideNews}>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'opinion'}/>
        <RenderArticles typeArticle={'article'} section={'opinion'}/>
      </div>
      </div>

      <div className={style.newsRandomContainer}>
        <div className={style.newsRandom}>news random</div>
        <div className={style.newsRandom}>news random</div>
        <div className={style.newsRandom}>news random</div>
        <div className={style.newsRandom}>news random</div>
      </div>
      

      <div className={style.moreNewsContainer}>
        <div className={style.moreNews}>More News</div>
        <div className={style.sideMoreNews}>Side More News</div>
      </div>

    
    <div className={style.categoryNewsSection}>
      <RenderArticles typeArticle={'article'} section={'well'}/>


    </div>

    <div className={style.categoryNewsSection}>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
    </div>

    <div className={style.categoryNewsSection}>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
    </div>

    <div className={style.categoryNewsSection}>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
    </div>

    <div className={style.game}>
      <div className={style.newsRandom}>Game random</div>
      <div className={style.newsRandom}>Game random</div>
      <div className={style.newsRandom}>Game random</div>
      <div className={style.newsRandom}>Game random</div>
    </div>
    
    <div className={style.categoryNewsSection}>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
    </div>

    <div className={style.categoryNewsSection}>
      <div className={style.newsCategory}>
        <p>World News</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'world'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'world'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'world'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'world'}/>
      </div>

      <div className={style.newsCategory}>
      <p>U.S News</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'us'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'us'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'us'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'us'}/>
      </div>
      <div className={style.newsCategory}>
      <p>U.S Politics</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'us'} subSection={"politics"}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'us'} subSection={"politics"}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'us'} subSection={"politics"}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'us'} subSection={"politics"}/>
      </div>
      <div className={style.newsCategory}>
      <p>New York </p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'nyregion'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'nyregion'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'nyregion'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'nyregion'}/>
      </div>
      <div className={style.newsCategory}>
      <p>Business</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'business'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'business'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'business'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'business'}/>
      </div>
      <div className={style.newsCategory}>
      <p>Technology</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'technology'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'technology'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'technology'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'technology'}/>
      </div>
      <div className={style.newsCategory}>
      <p>Science</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'science'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'science'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'science'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'science'}/>
      </div>
      <div className={style.newsCategory}>
        <p>Sports</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'sports'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'sports'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'sports'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'sports'}/>
      </div>
      <div className={style.newsCategory}>
        <p>Obituaries</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'obituaries'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'obituaries'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'obituaries'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'obituaries'}/>
      </div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
      <div className={style.newsCategory}>news category</div>
    </div>
    </div>
  );
}

export default Home;
