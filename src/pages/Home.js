import React, { useEffect, useState } from 'react';
import '../style/Body.css';

import useFetchArticle from '../service/fetchApiArticle';

import Figure from '../components/articles-components/Figcaption';
import SectionArticle from '../components/SectionArticle';
import Abstract from '../components/articles-components/Abstract';
import RenderArticles from '../containers/RenderArticles';
import Figcaption from '../components/articles-components/Figcaption';

import LoadingComponent from '../components/LoadingComponent';
import ErrorComponent from '../service/ErrorComponent';

const API_KEY = process.env.REACT_APP_API_KEY

function Home() {
  

  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;


  const {isLoading, hasError, errorMessage} = useFetchArticle(url);

  if (hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>


  // const articles = useSelector((state) => state.allArticles);
  // const dispatch = useDispatch()
  // const API_KEY = process.env.REACT_APP_API_KEY;

  // Const for select size of image
  const large = 0; //'large';
  const middle = 1; //'middle';    
  const small = 2; //'small';


  let slot = 0;
  let image = null;
  let sectionName = '';

  return (

    <div className='body'>
      <div className='top-news' >
        <div className='main-news'>
          <section className='container'>
            <RenderArticles slot={0} typeArticle={'article'} />
            <RenderArticles slot={1} typeArticle={'abstract'}/>
            <RenderArticles slot={2} typeArticle={'abstract'}/>
            <RenderArticles slot={3} typeArticle={'abstract'}/>

          </section>
          <section className='container'>
          <RenderArticles slot={0} typeArticle={'figcaption'}/>

          </section>
          
          <section className='container'>
            <RenderArticles slot={4} typeArticle={'abstract'}/>
            <RenderArticles slot={5} typeArticle={'abstract'}/>
            <RenderArticles slot={6} typeArticle={'abstract'}/>
            <RenderArticles slot={7} typeArticle={'abstract'}/>

          </section>

          <section className='container'>
          <RenderArticles slot={4} typeArticle={'figcaption'}/>

          </section>

          <section className='container'>
          <RenderArticles slot={8} typeArticle={'article'}/>
          </section>

          <section className='container'>
          <RenderArticles slot={8} typeArticle={'figcaption'}/>
          </section>

          <section className='container'>
          <RenderArticles slot={9} typeArticle={'article'}/>
          </section>

          <section className='container'>
          <RenderArticles slot={9} typeArticle={'figcaption'}/>
          </section>
          

          <section className='covid-section'>
            <div>Covid Section</div>
          </section>
                
          <section className='container'>
          <RenderArticles slot={10} typeArticle={'article'}/>
          </section>

          <section className='container'>
          <RenderArticles slot={10} typeArticle={'figcaption'}/>
          </section>

          <section className='container'>
          <RenderArticles slot={11} typeArticle={'article'}/>
          </section>

          <section className='container'>
          <RenderArticles slot={11} typeArticle={'figcaption'}/>
          </section>
      </div>
      <div className='side-news'>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'opinion'}/>
        <RenderArticles typeArticle={'article'} section={'opinion'}/>
      </div>
      </div>

      <div className="news-random-container">
        <div className='news-random'>news random</div>
        <div className='news-random'>news random</div>
        <div className='news-random'>news random</div>
        <div className='news-random'>news random</div>
      </div>
      

      <div className="more-news-container">
        <div className="more-news">More News</div>
        <div className="side-more-news">Side More News</div>
      </div>

    
    <div className='category-news-section'>
      <RenderArticles typeArticle={'article'} section={'well'}/>


    </div>

    <div className='category-news-section'>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
    </div>

    <div className='category-news-section'>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
    </div>

    <div className='category-news-section'>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
    </div>

    <div className='game'>
      <div className='news-random'>Game random</div>
      <div className='news-random'>Game random</div>
      <div className='news-random'>Game random</div>
      <div className='news-random'>Game random</div>
    </div>
    
    <div className='category-news-section'>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
    </div>

    <div className='category-news-section'>
      <div className='news-category'>
        <p>World News</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'world'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'world'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'world'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'world'}/>
      </div>

      <div className='news-category'>
      <p>U.S News</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'us'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'us'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'us'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'us'}/>
      </div>
      <div className='news-category'>
      <p>U.S Politics</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'us'} subSection={"politics"}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'us'} subSection={"politics"}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'us'} subSection={"politics"}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'us'} subSection={"politics"}/>
      </div>
      <div className='news-category'>
      <p>New York </p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'nyregion'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'nyregion'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'nyregion'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'nyregion'}/>
      </div>
      <div className='news-category'>
      <p>Business</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'business'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'business'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'business'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'business'}/>
      </div>
      <div className='news-category'>
      <p>Technology</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'technology'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'technology'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'technology'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'technology'}/>
      </div>
      <div className='news-category'>
      <p>Science</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'science'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'science'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'science'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'science'}/>
      </div>
      <div className='news-category'>
        <p>Sports</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'sports'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'sports'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'sports'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'sports'}/>
      </div>
      <div className='news-category'>
        <p>Obituaries</p>
        <RenderArticles slot={0} typeArticle={'figcaption'} section={'obituaries'}/>
        <RenderArticles slot={0} typeArticle={'title'} section={'obituaries'}/>
        <RenderArticles slot={1} typeArticle={'title'} section={'obituaries'}/>
        <RenderArticles slot={2} typeArticle={'title'} section={'obituaries'}/>
      </div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
    </div>
    </div>
  );
}

export default Home;
