import React, { useEffect, useState } from 'react';
import useFetchApiQuery from '../service/fetchApiQuery';
import { useParams, useLocation } from "react-router-dom";
import RenderArticles from '../containers/RenderArticles';
import ErrorComponent from '../service/ErrorComponent';
import LoadingComponent from '../components/LoadingComponent';
import CardSearchArticle from '../components/articles-components/CardSearchSection';


const Search = () => {
  //const [query, setQuery] = useState('');
  // let { query } = useParams();

 
  const location = useLocation();
  const query = location.state;
  const API_KEY = process.env.REACT_APP_API_KEY
  const url =`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;
  console.log(url);
  // console.log(query);
  
  console.log(location.state);
  const {isLoading, hasError, errorMessage} = useFetchApiQuery(url)



  if (hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>

  return (
    <>
      <div>Search Page query is ${query}</div>
      <CardSearchArticle/>
      {/* <RenderArticles typeArticle={'abstract'}/> */}
    </>
    
  )
}

export default Search