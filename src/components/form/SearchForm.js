import React, {useState} from 'react'
import { Link } from 'react-router-dom';
// import useFetchArticle from '../service/fetchApiArticle';
import { useNavigate } from 'react-router-dom';

import style from './searchForm.module.css'


// /articlesearch.json?q={query}&fq={filter}
// example
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
const API_KEY = process.env.REACT_APP_API_KEY
// let query = 'war';
// const url =` https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`;

const SearchForm = () => {
  // const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`../search/${query}`, {state: query});
    // setQuery('');
  }

  const onChange = (e) =>{
    setQuery(e.target.value);
    console.log(query);
  }

  const handleClick = () =>{
    // console.log(query);
    navigate(`../search/${query}`, {state: query});
    // setQuery('');
  }

  return (
    <div>
        <form className={style.formSearch} action="submit" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder='search'
              value={query}
              onChange={onChange} />
          </div>        
          <button 
            className='btn' 
            onClick={handleClick}
            type='submit'
          >
            <Link to={'/search'} props={query}>Go</Link>
          </button>
      </form>
      </div>
  )
}

export default SearchForm

