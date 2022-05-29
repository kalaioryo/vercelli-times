import React from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import style from './abstract.module.css';

const Abstract = ({article}) =>{

  const {title, abstract, url, sizeImg} = article;

  return (
    <section className={style.item}>
      <a href={`${url}`}>
        <p>{abstract}</p>
      </a>
    </section>
        
  )
  
}

Abstract.propTypes = {
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  // kicker: PropTypes.string.isRequired,
  // multimedia: PropTypes.array.isRequired
}

Abstract.defaultProps = {
  title: "title not found",
  abstract: "abstract not found",
  url: "url not found",
  //kicker: "kicker not found",
  //multimedia: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png" 
}

// function Abstract({slot}) {
//   const articles = useSelector((state) => state.allArticles.articles);
//   const renderAbstract = articles.map((article)=>{
//     const {title,abstract, url} = article;

//   return (
//     <section className='item' key={title}>
//       <a href={`${url}`}>
//         <p>{abstract}</p>
//       </a>
//     </section>
    
//   )
// })

// return(
//   <>{slot === undefined ? renderAbstract : renderAbstract[slot]}</>
//   )}

export default Abstract;