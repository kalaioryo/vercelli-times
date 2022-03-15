import React from "react";
import { useSelector } from "react-redux";
import ImgArticle from "./ImgArticle";

const Article = ({title, abstract, url}) => {
  // let img 

  return(
    <section className="item">
         <a href={`${url}`}>
           <div>
             <h2>{title}</h2>
             <p>{abstract}</p>
          </div>
         </a>    
       </section>
  )
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

