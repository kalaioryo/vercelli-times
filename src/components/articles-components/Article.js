import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import ImgArticle from "./ImgArticle";

const Article = ({article}) => {

  const {title, abstract, url, multimedia, sizeImg, itemType} = article

  if(itemType === "EmbeddedInteractive" ) {
    return null;
  } else{
    <section className="item">
         <a href={`${url}`}>
           <div>
             {sizeImg ? <ImgArticle multimedia={multimedia}/> : null}
             {title ? <h2>{title}</h2> : null}
             {abstract ? <p>{abstract}</p> : null}
          </div>
         </a>    
       </section>
  }

  return (
    <section className="item">
         <a href={`${url}`}>
           <div>
             {title ? <h2>{title}</h2> : null}
             {abstract ? <p>{abstract}</p> : null}
          </div>
         </a>    
       </section>
  ) 
}

{/* <section className="item">
         <a href={`${url}`}>
           <div>
             {title ? <h2>{title}</h2> : null}
             {abstract ? <p>{abstract}</p> : null}
          </div>
         </a>    
       </section> */}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  // kicker: PropTypes.string.isRequired,
  // multimedia: PropTypes.array.isRequired
}

Article.defaultProps = {
  title: "title not found",
  abstract: "abstract not found",
  url: "url not found",
  //kicker: "kicker not found",
  //multimedia: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png" 
}





// const Article = ({slot}) =>{
//   const articles = useSelector((state) => state.allArticles.articles);
//   // console.log(articles);
//   const renderArticles = articles.map((article)=>{
//     // console.log(articles);
//     const {title, abstract, url} = article;
//     const img = article.multimedia[2].url;
//     // console.log(article);
//     return (
    
//       <section className="item" key={title}>
//         <a href={`${url}`}>
//           <div>
//             <h2>{title}</h2>
//             <p>{abstract}</p>
//          </div>
//         </a>    
//       </section>
    
      
//     )
//   })
//   //console.log(articles[0].title);
//   return (
//     <>{slot === undefined ? renderArticles : renderArticles[slot]}</>

//     // {renderArticles}
//   )
// }

export default Article;

