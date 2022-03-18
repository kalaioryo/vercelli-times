import React from "react";
import { useSelector } from "react-redux";


const Title = ({title, url, multimedia}) =>{
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

