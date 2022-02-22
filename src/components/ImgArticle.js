import React from "react";
import { useSelector } from "react-redux";


const ImgArticle = ({slot, sizeImg }) =>{
  const articles = useSelector((state) => state.allArticles.articles);
  const renderArticles = articles.map((article)=>{
    const {url, title} = article;
    const img = article.multimedia[sizeImg].url;
    return (
      <>
        <a key={title} href={`${url}`}>
          <img src={`${img}`} width='100%' height='100%'></img>
        </a>
      </>
      
    )
  })
  return (<>{renderArticles[slot]}</>)
}

export default ImgArticle;

