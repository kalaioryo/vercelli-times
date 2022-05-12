import React from "react";
import { useSelector } from "react-redux";


const Title = ({article}) =>{
  const {title, url, multimedia} = article
  return (
    
  <section>
    <a href={`${url}`}>
      <div>
        <h2>{title}</h2>
      </div>
    </a>    
  </section>
  )
}



export default Title;

