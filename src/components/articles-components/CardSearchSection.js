import React from 'react'
import { useSelector } from "react-redux";



const CardSearchArticle = () => {
  const articles = useSelector((state) => state.queryArticle.articles);
  console.log(articles);

  const RenderCard = articles.map((article) =>{
    const {abstract,_id} = article;
    return(
      <section key={_id}>
        <p>{abstract}</p>
      </section>
    )
  })

  
  return (
    RenderCard
  )
}

export default CardSearchArticle