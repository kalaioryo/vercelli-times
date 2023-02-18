import React from "react";
import PropTypes from 'prop-types';

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import moment from "moment";

import style from './articleSearchNews.module.css';

const ArticleSearchNews = () => {

  const articles = useSelector((state) => state.queryArticle.articles);
  const navigate = useNavigate();

  const Image = ({multimedia, alt}) => {
    const urlBase = 'https://www.nytimes.com/';
    const defaultImg = "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";
    const altDefault = "image of article";
    return (
          <img 
            className={style.image}
            alt={ alt ? alt : altDefault }
            src={`${multimedia?.[1]?.url ? urlBase + multimedia[1].url : defaultImg}`}
            width='100%' 
            height='100%'
          />
    )
  }

  const RenderArticle = articles.map((article) =>{
    const {_id, pub_date, snippet, news_desk, multimedia, headline} = article;

    let date = moment(pub_date).format('MMM[.] D');

    const handleClick = () =>{
      localStorage.singleArticle = JSON.stringify(article)
      navigate('/article');
      
    }
    return(
      <section className={style.containerNews} key={_id}>
        <div className={style.container}>
          <div className={style.date}>
            <p>{date}</p>
          </div>
          <div className={style.textContainer} onClick={handleClick}>
            <p>{news_desk}</p>
            <h4>{headline.main}</h4>
            <p>{snippet}</p>
          </div>
        </div>
        
        <figure className={style.imageContainer}>
          <Image multimedia={multimedia} alt={headline.main}/>
        </figure>
      </section>
    )
  })

  return RenderArticle

}

// ArticleSearchNews.prototype = {
//   _id: PropTypes.number.isRequired,
//   multimedia: PropTypes.array.isRequired,
//   headline: PropTypes.string.isRequired
// }

// ArticleSearchNews.defaultProps ={
//   abstract: "abstract not found",
//   _id: "id not found",
//   web_url: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png",
//   multimedia: [{url:"https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png" }],
//   headline: "headline not found"
// }

export default ArticleSearchNews