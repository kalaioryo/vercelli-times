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
  const imgUrl = multimedia[1].url;
  // const imgUrl = null;


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
  imgUrl:PropTypes.string.isRequired,
  multimedia: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string
    })
  ),
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
Figcaption.defaultProps = {
  multimedia: PropTypes.arrayOf(
    PropTypes.shape({
      url: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png"
    })),
  imgUrl: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png"

}

// Article.propTypes = {
//   title: PropTypes.string.isRequired,
//   abstract: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   // kicker: PropTypes.string.isRequired,
//   // multimedia: PropTypes.array.isRequired
// }

// Article.defaultProps = {
//   title: "title not found",
//   abstract: "abstract not found",
//   url: "url not found",
//   //kicker: "kicker not found",
//   //multimedia: "https://www.pngkey.com/png/detail/79-790806_new-york-times-logo-new-york-times-png.png" 
// }



// return(
//   <>{renderAbstarct[slot]}</>
// )}

export default Figcaption;