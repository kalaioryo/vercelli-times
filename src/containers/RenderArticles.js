import React from "react";
import { useSelector } from "react-redux";
import Abstract from "../components/articles-components/Abstract";
import Article from "../components/articles-components/Article"
import Figcaption from "../components/articles-components/Figcaption";
import PropTypes from 'prop-types';

const test ={
  multimedia: [{
    url: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png"
  },
  {
    url:"https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png"
  },
  {
    url: null
  }
]
}

const RenderArticles = ({slot, typeArticle}) =>{
  const articles = useSelector((state) => state.allArticles.articles);

  
  const RenderArticle = articles.map((article)=>{

    const {title, abstract, url, kicker, multimedia} = article;
    // const useTest = test.multimedia[0].url;
    // const img = article.multimedia[1].url;

    // const imgUrl = false;
    // const imgUrl = multimedia[2].url;
    // const imgUrl = multimedia?.[0]?.url? multimedia[0].url :  useTest; //temporaneo
    

    if(typeArticle === 'article'){
      return(
        <Article key={`article:${title}`} title={title} abstract={abstract} url={url}/>
      )
    }
    else if(typeArticle === 'abstract'){
      return (<Abstract key={`abstract:${title}`} title={title} abstract={abstract} url={url}/>
      )
    }
    else if(typeArticle === 'figcaption'){
      // console.log(article.multimedia[0].url);
      // const img = test.multimedia[3].url;
      
      return (<Figcaption key={`figcaption:${title}`} title={title} multimedia={multimedia} url={url} kicker={kicker}/>
      )
    }
  })
  return(<>{slot === undefined ? RenderArticle : RenderArticle[slot]}</>)

  
 
}

RenderArticles.propTypes = {
  img: PropTypes.string,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      abstarct: PropTypes.string,
      url: PropTypes.string,
      kicker: PropTypes.string,
      multimedia: PropTypes.array 
    })
  )
}
RenderArticles.defaultProps = {
  img: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png",
}


export default RenderArticles;

 //url: sostitutivo url for img: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";

  //Render component Article
  // if(typeArticle === 'article'){

  // const RenderArticle = articles.map((article)=>{

  //   const {title, abstract, url} = article;
  //   const img = image != null || undefined ? article.multimedia[image].url : null ;
  //   // const img = article.multimedia[2].url;

  //   return(
  //     <Article title={title}
  //              abstract={abstract}
  //              url={url}
  //              img={img}/>
  //   )
  // })

  // return (
  //   <>{slot === undefined ? RenderArticle : RenderArticle[slot]}</>
  //   )}

  // //Render componemt Abstract
  // if(typeArticle === 'abstract'){

  // const RenderAbstract = articles.map((article)=>{

  //   const {title, abstract, url} = article;
  //   // const img = article.multimedia[2].url;

  //   return(
  //     <Abstract title={title} abstract={abstract} url={url}/>
  //   )
  // })

  // return (
  //   <>{slot === undefined ? RenderAbstract : RenderAbstract[slot]}</>
  //   )}
  
  // //Render component Figure
  // if(typeArticle === 'figcaption'){

  // const RenderFigcaption = articles.map((article)=>{

  //   const {title, url, kicker} = article;
  //   const img = article.multimedia[2].url;

  //   return(
  //     <Figcaption title={title} img={img} url={url} kicker={kicker}/>
  //   )
  // })

  // return (
  //   <>{slot === undefined ? RenderFigcaption : RenderFigcaption[slot]}</>
  //   )}





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
    