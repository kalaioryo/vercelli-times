import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {FaSearch} from 'react-icons/fa'
import SearchForm from './SearchForm';


function SearchButton() {
  const [toggle, setToggle] = useState(false);

  const toggleClick = () =>{
    setToggle(!toggle);
  }

  return (
    <>
      <button 
        className='search-btn' 
        type='search'
        onClick={toggleClick}
      >
        <FaSearch size="22px"/>
      </button>
      { toggle ? <SearchForm/> : null}
    </>
  );
}

export default SearchButton;
