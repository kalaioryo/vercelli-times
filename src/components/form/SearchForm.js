import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './searchForm.module.css';
import { closeSidebarMobile } from '../../redux/actions/sidebarMobileAction';

const API_KEY = process.env.REACT_APP_API_KEY

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
    console.log(query);
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

