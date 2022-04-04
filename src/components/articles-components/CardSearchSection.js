import React from 'react'
import { useSelector } from "react-redux";
import style from "./cardSearchSection.module.css"



const CardSearchArticle = () => {
  const articles = useSelector((state) => state.queryArticle.articles);
  console.log(articles);

  const Image = ({multimedia}) =>{
    const urlBase = "https://www.nytimes.com/";
    const defaultImg = "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";
    return (
      <>
        <img className={style.image} src={`${multimedia[0] ? urlBase + multimedia[22].url : defaultImg}`} width='90%' height='90%'></img>
      </>
    )
  }
  const RenderCard = articles.map((article) =>{
    const {abstract,_id, web_url, multimedia } = article;
    // console.log(multimedia);
    return(
      <section className={style.card} key={_id}>
        <div>
          <div className={style.cardContent}>
            <Image multimedia={multimedia}/> 
            <p>{abstract}</p>
          </div>
          <div>
            <button className='btn '>Read More</button>
          </div>
          
          
        </div>
        
      </section>
    )
  })

  

  
  return (
    RenderCard
  )
}

export default CardSearchArticle