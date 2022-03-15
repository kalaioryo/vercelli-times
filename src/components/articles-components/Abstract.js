import React from 'react'
import { useSelector } from 'react-redux';

const Abstract = ({title, abstract, url}) =>{

  return (
    <section className='item'>
      <a href={`${url}`}>
        <p>{abstract}</p>
      </a>
    </section>
        
  )
  
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