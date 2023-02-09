import React from "react";

const ImgArticle = ({multimedia, alt}) =>{
  
  return(
    <>
      {multimedia && 
        <img  
          src={`${multimedia[1]?.url}`}
          alt={alt}
          width='100%'
          height='100%'
        >
        </img>
      }
    </>
  )
}

export default ImgArticle;

