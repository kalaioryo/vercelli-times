import React, {useState} from 'react';

import {FaSearch} from 'react-icons/fa'
import SearchForm from '../form/SearchForm';

import style from "./searchButton.module.css"

function SearchButton() {
  const [toggle, setToggle] = useState(false);

  const toggleClick = () =>{
    setToggle(!toggle);
  }

  return (
    <>
      <button 
        type='search'
        onClick={toggleClick}
      >
        <FaSearch size="22px"/>
      </button>
      {toggle &&
        <div className={style.containerForm}>
          <SearchForm/>
        </div> 
      }
    </>
  )
}

export default SearchButton;
