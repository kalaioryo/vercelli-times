import React from 'react'
import PropTypes from 'prop-types';

import style from './abstract.module.css';

const Abstract = ({article}) =>{

  const {abstract, url} = article;

  return (
    <section className={style.item}>
      <a href={`${url}`}>
        <p>{abstract}</p>
      </a>
    </section>        
  )
}

Abstract.propTypes = {
  abstract: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

Abstract.defaultProps = {
  abstract: "abstract not found",
  url: "/url-not-found",
}

export default Abstract;