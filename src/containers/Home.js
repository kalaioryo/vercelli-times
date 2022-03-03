import React, { useEffect } from 'react';
import '../style/Body.css';
import Article from '../components/articles-components/Article';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { setArticles } from '../redux/actions/articleAction';
import ImgArticle from '../components/ImgArticle';
import SideArticle from '../components/SideArticle';
import useFecthArticle from '../service/fetchApi';
import Abstract from '../components/articles-components/Abstract';
const API_KEY = process.env.REACT_APP_API_KEY
const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;


function Body() {
  // const articles = useSelector((state) => state.allArticles);
  // const dispatch = useDispatch()
  // const API_KEY = process.env.REACT_APP_API_KEY;


  // useFecthArticle(url);
  const articles = useSelector((state) => state.allArticles);
  // const renderArticles = articles.map((article) => article); da testare

  let slot = 0;
  let sizeImg = 0;
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
      <div className='top-news' >-
        <div className='main-news'>
          <section className='section'>
            <Article slot={slot = 0}/>
            <Article slot={slot = 1}/>
            <Abstract slot={slot = 0}/>
          </section>
          <div className='img-article' >
            <ImgArticle slot={0} sizeImg={sizeImg=1}/>
          </div>

          <section className='section'>
          <Article slot={slot = 2}/>
          </section>
          <div className='img-article'>
          <ImgArticle slot={slot = 2} sizeImg={sizeImg=1}/>
          </div>
          

          <section>
            <div>Covid Section</div>
          </section>
                
        <div>News</div>
        <div>News</div>
      </div>
      <div className='side-news'>
        <SideArticle sectionName={'arts'}/>   
        <SideArticle sectionName={'opinion'}/>
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

export default Body;
