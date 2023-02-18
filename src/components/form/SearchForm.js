import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom';

import {useDispatch } from 'react-redux';
import { closeSidebarMobile } from '../../redux/actions/sidebarMobileAction';

import style from './searchForm.module.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!query) return alert("Insert a word");
    navigate(`../search/${query}`, {state: query});
    setQuery('');
    dispatch(closeSidebarMobile());
    document.body.style.overflow = 'visible';
  }

  const onChange = (e) =>{
    setQuery(e.target.value);
  }

  return (
    <>
      <form className={style.searchForm} action="submit" onSubmit={handleSubmit} >
        <input
          type="text" 
          placeholder='search'
          value={query}
          onChange={onChange}
        />
        <button type='submit'>GO</button>
      </form>
    </>
  )
}

export default SearchForm