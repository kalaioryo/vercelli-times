import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
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
        <FontAwesomeIcon icon={faSearch} size="lg"/>
      </button>
      { toggle ? <SearchForm/> : null}
    </>
  );
}

export default SearchButton;
