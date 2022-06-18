import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { setSingleArticle } from '../../redux/actions/articleAction';

import style from "./cardSearchSection.module.css"


const CardSearchArticle = () => {

  const articles = useSelector((state) => state.queryArticle.articles);
  const navigate = useNavigate();
  console.log(articles);

  const Image = ({multimedia}) =>{
    const urlBase = "https://www.nytimes.com/";
    const defaultImg = "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";
    return (
      <>
        <img className={style.image} src={`${multimedia?.[1]?.url ? urlBase + multimedia[1].url : defaultImg}`} width='90%' height='90%'></img>
      </>
    )
  }
  const RenderCard = articles.map((article) =>{
    const {_id, multimedia, headline} = article;

    const handleClick = () =>{
      localStorage.singleArticle = JSON.stringify(article)
      navigate('/article');
    }
    return(
      <section className={style.card} key={_id}>
        
          <div className={style.cardContent}>
            <div  className={style.containerImage}>
              <Image multimedia={multimedia}/>
            </div>
            <p className={style.abstract}>{headline.main}</p>
          </div>
          <div>
            <button className={style.btn} onClick={handleClick}>Read More</button>
          </div>
              
      </section>
    )
  })

  return (
    RenderCard
  )
}

CardSearchArticle.prototype = {
  abstract: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired,
  web_url: PropTypes.string.isRequired,
  multimedia: PropTypes.array.isRequired,
  headline: PropTypes.string.isRequired
}

CardSearchArticle.defaultProps = {
  abstract: "abstract not found",
  _id: "id not found",
  web_url: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png",
  // multimedia: [{url:"https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png" }],
  headline: "headline not found"
}



export default CardSearchArticle