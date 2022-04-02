import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

import Abstract from "../components/articles-components/Abstract";
import Article from "../components/articles-components/Article"
import Figcaption from "../components/articles-components/Figcaption";
import Title from "../components/articles-components/Title";

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

const RenderArticles = ({slot, typeArticle, sizeImg}) =>{
  const articles = useSelector((state) => state.allArticles.articles);
  // console.log(articles);
  
  const RenderArticle = articles.map((article, index)=>{
    
    const {title, abstract, url, kicker, multimedia, item_type} = article;
    // const useTest = test.multimedia[0].url;
    // const img = article.multimedia[1].url;

    // const imgUrl = false;
    // const imgUrl = multimedia[2].url;
    // const imgUrl = multimedia?.[0]?.url? multimedia[0].url :  useTest; //temporaneo
    

    if(typeArticle === 'article'){
      return(
        <Article 
          key={`article: ${index + title}`}
          title={title} 
          abstract={abstract} 
          url={url}
          sizeImg={sizeImg}
          multimedia={multimedia}
          itemType={item_type}
          />
      )
    }
    else if(typeArticle === 'abstract'){
      return (
        <Abstract 
          key={`abstract:${index + title}`}
          title={title}
          abstract={abstract}
          url={url}
          sizeImg={sizeImg}
          />
      )
    }
    else if(typeArticle === 'figcaption'){
            
      return (
        <Figcaption 
          key={`figcaption:${index + title}`} 
          title={title} 
          multimedia={multimedia} 
          url={url} 
          kicker={kicker}
          sizeImg={sizeImg}
          />
      )
    }
    else if(typeArticle === 'title'){
      return(
        <Title 
          key={`title:${index + title}`}
          title={title}
          multimedia={multimedia}
          url={url}
          sizeImg={sizeImg}
          />
      )
    }
  })
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
    