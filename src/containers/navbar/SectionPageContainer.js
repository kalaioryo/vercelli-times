import React from 'react';
import useFetchArticle from '../../service/fetchApiArticle';
import RenderArticles from '../RenderArticles';

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