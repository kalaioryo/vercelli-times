import React from "react";
import PropTypes from 'prop-types';

import ImgArticle from "./ImgArticle";

import style from './article.module.css';

const Article = ({article}) => {

  const {title, abstract, url, multimedia, item_type} = article
  
  if(item_type !== "Article") {
    return null;
  } else{
    <section className={style.item}>
      <a href={`${url}`}>
        <div>
          <ImgArticle multimedia={multimedia} alt={title}/>
          {title ? <h3>{title}</h3> : null}
          {abstract ? <p>{abstract}</p> : null}
        </div>
      </a>    
    </section>
  }

  return (
    <section className={style.item}>
      <a href={`${url}`}>
        <div>
          {title ? <h3>{title}</h3> : null}
          {abstract ? <p>{abstract}</p> : null}
        </div>
      </a>
      <div className={style.borderHorizontal}></div>
    </section>
  ) 
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  multimedia: PropTypes.array
}

Article.defaultProps = {
  title: "title not found",
  abstract: "abstract not found",
  url: "url not found",
}

export default Article;

