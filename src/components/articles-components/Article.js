import React from "react";
import { useSelector } from "react-redux";


const Article = ({slot}) =>{
  const articles = useSelector((state) => state.allArticles.articles);
  // console.log(articles);
  const renderArticles = articles.map((article)=>{
    // console.log(articles);
    const {title, abstract, url} = article;
    const img = article.multimedia[2].url;
    // console.log(article);
    return (
    
      <article key={title}>
        <a href={`${url}`}>
          <div>
            <h2>{title}</h2>
            <p>{abstract}</p>
         </div>
        </a>    
      </article>
    
      
    )
  })
  //console.log(articles[0].title);
  return (
    <>{renderArticles[slot]}</>

    // {renderArticles}
  )
}

export default Article;

