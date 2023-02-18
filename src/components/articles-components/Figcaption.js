import React from 'react';

import PropTypes from 'prop-types';

import style from './figcaption.module.css'
function Figcaption({article}) {

  const {title, multimedia, url, kicker} = article;
  const defaultImg = "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png";

  return (
    <figure className={style.figure}>
      <a href={`${url}`}>
      <img 
        className={style.image} 
        src={`${multimedia ? multimedia[1]?.url : defaultImg}`}
        alt={title}
        width='100%'
        height='100%'
      ></img>
      </a>
      <figcaption>{kicker}</figcaption>
    </figure>
  )
}

Figcaption.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    multimedia: PropTypes.array,
    url: PropTypes.string,
    kicker: PropTypes.string
  })
}

export default Figcaption;