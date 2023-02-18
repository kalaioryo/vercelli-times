import React from "react";

import PropTypes from 'prop-types';

import { useSelector } from "react-redux";

import Abstract from "./Abstract";
import Article from "./Article"
import Figcaption from "./Figcaption";
import Title from "./Title";
import ErrorComponent from "../ErrorComponent";

const RenderArticles = ({slot, typeArticle, restNews, image, section, subSection}) =>{
  const articles = useSelector((state) => state.allArticles.articles);

  const RenderArticle = articles
    .filter((article, index)=> restNews === 'more-news-1' ? index > 13 && index < 19 : true)
    .filter((article, index)=> restNews === 'more-news-2' ? index > 19 && index < 24 : true)    
    .filter((article, index)=> restNews === 'side-more-news' ? index > 23 : true)
    .filter((article) => section ? article.section === section : true)
    .filter((article) => subSection ? article.subsection === subSection : true)
    .map((article, index)=>{

    const {title} = article    

    const MyComponent = {
      "article": <Article key={`article:${index + title}`} article={article} image={image}/>,
      "abstract": <Abstract key={`abstract:${index + title}`} article={article} />,
      "figcaption": <Figcaption key={`figcaption:${index + title}`} article={article} />,
      "title": <Title key={`title:${index + title}`} article={article} />,
      "default": <ErrorComponent key={`Error${index + title}`} message={"no render, insert typeArticle"}/>
    }
    return MyComponent[typeArticle] || MyComponent["default"];
  })
  
  return(<>{slot === undefined ? RenderArticle : RenderArticle[slot]}</>)
}

RenderArticles.propTypes = {
  slot: PropTypes.number,
  typeArticle: PropTypes.string,
  restNews: PropTypes.string,
  image: PropTypes.bool,
  section: PropTypes.string,
  subSection: PropTypes.string,
}

export default RenderArticles;