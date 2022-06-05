import React from 'react';
import style from './sectionPageContainer.module.css'
import useFetchArticle from '../service/fetchApiArticle';
import RenderArticles from './articles-components/RenderArticles';

const SectionPageContainer = ({section, subSection}) => {

  return (
    <div>
      <RenderArticles 
        typeArticle={'article'} 
        sizeImg={true}
        subSection={subSection}/>
    </div>

  )
}

export default SectionPageContainer