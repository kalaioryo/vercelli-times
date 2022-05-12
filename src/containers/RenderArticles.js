import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

import Abstract from "../components/articles-components/Abstract";
import Article from "../components/articles-components/Article"
import Figcaption from "../components/articles-components/Figcaption";
import Title from "../components/articles-components/Title";
import ErrorComponent from "../service/ErrorComponent";

// const test ={
//   multimedia: [{
//     url: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png"
//   },
//   {
//     url:"https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png"
//   },
//   {
//     url: null
//   }
// ]
// }

const RenderArticles = ({slot, typeArticle, sizeImg, section, subSection}) =>{
  const articles = useSelector((state) => state.allArticles.articles);

  const RenderArticle = articles
    .filter((article) => section ? article.section === section : true)
    .filter((article) => subSection ? article.subsection === subSection : true)
    .map((article, index)=>{

    const {title} = article    

    const Mycomponent = {
      "article": <Article key={`article:${index + title}`} article={article} />,
      "abstract": <Abstract key={`abstract:${index + title}`} article={article} />,
      "figcaption": <Figcaption key={`figcaption:${index + title}`} article={article} />,
      "title": <Title key={`title:${index + title}`} article={article} />,
      "default": <ErrorComponent key={`Error${index + title}`} message={"no render, insert typeArticle"}/>
    }
    return Mycomponent[typeArticle] || Mycomponent["default"];
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
  // abstarct: PropTypes.string.isRequired,
  // url: PropTypes.string.isRequired,
  // kicker: PropTypes.string.isRequired,
  // multimedia: PropTypes.array.isRequired
}
// RenderArticles.defaultProps = {
//   RenderArticle: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: "title not found",
//       abstarct: "abstract not found",
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
    