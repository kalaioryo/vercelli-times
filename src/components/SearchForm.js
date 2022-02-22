import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchForm() {
  return (
    <>
      <button className='search-btn' type='search' >
        <FontAwesomeIcon icon={faSearch} size="lg"/>
      </button>
      <div>
        <form className='form-search' action="submit">
          <div>
            <input type="text" placeholder='search'/>
          </div>        
        <button className='btn'>GO</button>
      </form>
      </div>
      
    </>
  );
}

export default SearchForm;
