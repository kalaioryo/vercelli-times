import React from 'react';
import useFetchArticle from '../../service/fetchApi';
import RenderArticles from '../RenderArticles';

const SectionPageContainer = ({section}) => {
  const API_KEY = process.env.REACT_APP_API_KEY

  // const section = 'world';
  const url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`;

  useFetchArticle(url);
  // console.log();
  return (
    <div>
      <div>Section Container</div>
      <RenderArticles typeArticle={'article'}/>

    </div>

  )
}

export default SectionPageContainer