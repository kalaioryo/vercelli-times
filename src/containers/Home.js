import React, { useEffect } from 'react';
import '../style/Body.css';
import Article from '../components/articles-components/Article';
import { useDispatch, useSelector } from 'react-redux';
import useFetchArticle from '../service/fetchApi';

// import axios from 'axios';
// import { setArticles } from '../redux/actions/articleAction';
import Figure from '../components/articles-components/Figcaption';
// import ImgArticle from '../components/articles-components/ImgArticle';
import SectionArticle from '../components/SectionArticle';
import Abstract from '../components/articles-components/Abstract';
import RenderArticles from './RenderArticles';
import Figcaption from '../components/articles-components/Figcaption';
const API_KEY = process.env.REACT_APP_API_KEY

function Home() {
  const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;

  useFetchArticle(url);

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

  // const fecthArticle = async () =>{
  //   const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
  //   .catch((err) => {
  //     console.log("Err", err);
  //   });
  //   // console.log(response.data);
  //   dispatch(setArticles(response.data.results));
  // }

  // useEffect(()=>{
  //   useFecthArticle()
    
  // },[])

  return (

    <div className='body'>
      <div className='top-news' >
        <div className='main-news'>
          <section className='container'>
            <RenderArticles slot={0} typeArticle={'article'} />
            {/* <Article slot={slot = 0}/> */}
            {/* <Figure slot={0} sizeImg={sizeImg=0}/> */}
            <RenderArticles slot={1} typeArticle={'abstract'}/>
            <RenderArticles slot={2} typeArticle={'abstract'}/>
            <RenderArticles slot={3} typeArticle={'abstract'}/>


          </section>
          <section className='container'>
          <RenderArticles slot={0} typeArticle={'figcaption'} sizeImg={middle}/>

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
        {/* <SectionArticle sectionName={'us'}/>    */}
        <RenderArticles slot={18} typeArticle={'figcaption'}/>
        {/* <Figure slot={18} sizeImg={2}/> */}
        <SectionArticle sectionName={'opinion'}/>
        {/* <SideArticle sectionName={'arts'}/> */}
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
      <SectionArticle sectionName={'well'} />
      {/* <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div> */}
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
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
      <div className='news-category'>news category</div>
    </div>
    </div>
  );
}

export default Home;
