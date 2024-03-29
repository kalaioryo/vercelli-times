import React from "react";
import PropTypes from 'prop-types';

import style from './article.module.css';

const Article = ({article, image}) => {
  const {title, abstract, url, multimedia, item_type} = article
  const defaultImg = "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";
  const Image = ({multimedia}) => {
    return(
      <figure>
        <img 
        className={style.image} 
        src={`${multimedia ? multimedia[1]?.url : defaultImg}`}
        alt={title}
        width='100%'
        height='100%'
      ></img>
      </figure>
    )
  }
  
  if(item_type !== "Article") {
    return null;
  } else {
    return(
      <section className={style.item}>
        <a href={`${url}`}>
          <div>
            {image && <Image title={title} multimedia={multimedia}/>}
            {title && <h3 className={style.title}>{title}</h3>}
            {abstract && <p>{abstract}</p>}
          </div>
        </a>
        {image ? null : <div className={style.borderHorizontal}></div>}
      </section>
  )}}

  Article.propTypes = {
    article: PropTypes.object.isRequired,
    image: PropTypes.bool,
    title: PropTypes.string,
    abstract: PropTypes.string,
    url: PropTypes.string,
    item_type: PropTypes.string
  }

  Article.defaultProps = {
    url: "/url-not-found",
  }

export default Article;

