import React from 'react';
import style from './sectionPageContainer.module.css'
import useFetchArticle from '../service/fetchApiArticle';
import RenderArticles from './articles-components/RenderArticles';

const SectionPageContainer = ({section, subSection}) => {

  return (
    <div className={style.articleContainer}>
      <div className={style.figcaption}>
        <RenderArticles 
        typeArticle={'figcaption'} 
        slot={0}
        sizeImg={true}
        subSection={subSection}/>
      </div>
      

      <RenderArticles 
        typeArticle={'article'} 
        sizeImg={true}
        subSection={subSection}/>
    </div>

  )
}

export default SectionPageContainer