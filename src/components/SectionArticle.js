import React from "react";
import { useSelector } from "react-redux";


const SectionArticle = ({sectionName, slot}) =>{
  const articles = useSelector((state) => state.allArticles.articles);
  // console.log(articles);
  const renderArticles = articles.filter(article => article.section === sectionName).map((article)=>{
    // console.log(articles);
    const {title, abstract, url, kicker} = article;
    const img = article.multimedia[2].url;
    // console.log(article);
    // const mydate = new Date().toISOString();
    return (
 
      <article key={title}>
        <a href={`${url}`}>
          <div>
            <p>{kicker}</p>
            <h3>{title}</h3>
            {/* <p>{abstract}</p> */}
         </div>
         {/* <img src={`${img}`}></img> */}
        </a>    
      </article>
    )
  })
  //console.log(articles[0].title);
  return (
    <>{slot === undefined ? renderArticles : renderArticles[slot]}</>

    // {renderArticles}
  )
}

export default SectionArticle;

