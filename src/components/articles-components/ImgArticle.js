import React from "react";
import { useSelector } from "react-redux";


const ImgArticle = ({title, sizeImg, url, img }) =>{

  return(<img src={`${img}`} width='100%' height='100%'></img>)

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

