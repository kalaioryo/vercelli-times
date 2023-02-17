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
  //.console.log([...articlsizeImges]);
  // .filter( filter ?  === filter : true))
  return(<>{slot === undefined ? RenderArticle : RenderArticle[slot]}</>)
}

RenderArticles.propTypes = {
  articles: PropTypes.func,
  RenderArticle: PropTypes.func,
  // article: PropTypes.string.isRequired
  // title: PropTypes.string.isRequired,
  // abstract: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  // kicker: PropTypes.string.isRequired,
  // multimedia: PropTypes.array.isRequired
}
// RenderArticles.defaultProps = {
//   RenderArticle: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: "title not found",
//       abstract: "abstract not found",
//       url: "url not found",
//       kicker: "kicker not found",
//       multimedia: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png" 
//     })
//   )
// }


export default RenderArticles;

 //url: sostitutivo url for img: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";

   // const imgLarge = article.multimedia[0].url;
    // const imgMiddle = article.multimedia[1].url;
    // const imgSmall = article.multimedia[2].url;

    // const renderImg = ()=>{
    //   let img = '';
    //   switch(imageSize){
    //     case'large':
    //       img = imgLarge;
    //       break;
    //     case'middle':
    //       img = imgMiddle;
    //       break;
    //     case'small':
    //       img = imgSmall;
    //       break;
    //     default:
    //       img = '';
    //   }
    // }
    // let img = renderImg();
    