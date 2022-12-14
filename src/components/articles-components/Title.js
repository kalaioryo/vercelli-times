import React from "react";
import { useSelector } from "react-redux";
import style from "./title.module.css";

const Title = ({article}) =>{
  const {title, url, multimedia} = article
  return (
    
  <section className={style.titleSection}>
    <a href={`${url}`}>
      <div>
        <h3>{title}</h3>
      </div>
    </a>    
  </section>
  )
}



export default Title;

