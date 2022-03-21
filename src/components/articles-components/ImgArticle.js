import React from "react";
import { useSelector } from "react-redux";

const Img = (multimedia) =>{
  return <img src={`${multimedia[1].url}`} width='100%' height='100%'></img>
}


const ImgArticle = ({multimedia}) =>{
  
  // const multimedia = multimedia;

  return(
    <>
      {multimedia ? <Img multimedia={multimedia}/> : null}
    </>
  )

    // // const img = article.multimedia[sizeImg].url;
    // if(img != null || undefined){
    //   return (
    //     <img src={`${img}`} width='100%' height='100%'></img>
    // )
    // } else {
    //   return null
    // }
}


export default ImgArticle;

