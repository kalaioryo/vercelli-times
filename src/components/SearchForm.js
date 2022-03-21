import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function SearchForm() {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const handleClick = () =>{
    <Link to={'/search'}/>
  }
  return (
    <>
      <button className='search-btn' type='search' >
        <FontAwesomeIcon icon={faSearch} size="lg"/>
      </button>
      <div>
        <form className='form-search' action="submit" onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder='search'/>
          </div>        
          <button className='btn' onClick={handleClick}>
            <Link to={'/search'}>Go</Link>
          </button>
      </form>
      </div>
      
    </>
  );
}

export default SearchForm;
