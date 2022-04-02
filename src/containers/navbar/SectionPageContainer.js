import React from 'react';
import useFetchArticle from '../../service/fetchApiArticle';
import RenderArticles from '../RenderArticles';

const SectionPageContainer = ({section}) => {

  return (
    <div>
      <RenderArticles typeArticle={'article'} sizeImg={true}/>
    </div>

  )
}

export default SectionPageContainer