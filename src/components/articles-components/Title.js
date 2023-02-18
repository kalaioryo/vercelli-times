import React from "react";

import PropTypes from 'prop-types';

import style from "./title.module.css";

const Title = ({article}) =>{
  const {title, url} = article
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

Title.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string
  })
}



export default Title;

