import React, { useEffect, useState } from 'react';
import useFetchApiQuery from '../service/fetchApiQuery';
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

import style from './searchPage.module.css'

import ErrorComponent from '../components/ErrorComponent';
import LoadingComponent from '../components/LoadingComponent';
import SearchForm from '../components/form/SearchForm';
import ArticleSearchNews from '../components/articles-components/ArticleSearchNews';

const Search = () => {

  const { query } = useParams();
 
  const location = useLocation();
  const API_KEY = process.env.REACT_APP_API_KEY
  const url =`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;
  console.log(url);
  
  const {isLoading, hasError, errorMessage} = useFetchApiQuery(url)

  if (hasError) return <ErrorComponent message={errorMessage} />

  if (isLoading) return <LoadingComponent/>
  
  return (
    <div className={style.searchPage} >
      <div>
        <h1 className={style.query}>{query}</h1>
      </div>
      <div className={style.containerForm}>
        <SearchForm/>
      </div>      
      <section className={style.NewsSection}>
        <ArticleSearchNews/>
      </section>
    </div>
  )
}

export default Search