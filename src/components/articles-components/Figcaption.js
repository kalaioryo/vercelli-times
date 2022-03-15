import React from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Figcaption({title, multimedia, url, kicker}) {
  // const articles = useSelector((state) => state.allArticles.articles);
  // const renderAbstarct = articles.map((article)=>{
  //   const {title, kicker, url} = article;
  //   const img = article.multimedia[sizeImg].url;
  // const imgUrl = multimedia[0].url;
  console.log(multimedia);
  const imgUrl = multimedia[0].url;


  return (
    <figure className='figcaption' >
      <a href={`${url}`}>
      <img src={`${imgUrl}`} width='100%' height='100%'></img>
      </a>
      <figcaption>{kicker}</figcaption>

    </figure>
    
  )
}

Figcaption.propTypes = {
  // imgUrl: PropTypes.string,
  url: PropTypes.string,
  kicker: PropTypes.string
}
Figcaption.defaultProps = {
  imgUrl: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png"

}



// return(
//   <>{renderAbstarct[slot]}</>
// )}

export default Figcaption;