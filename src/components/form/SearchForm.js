import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './searchForm.module.css';
import { closeSiderbarMobile } from '../../redux/actions/siderMobileAction';

const API_KEY = process.env.REACT_APP_API_KEY

const SearchForm = () => {
  // const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSubmit = (e) =>{
    // closeSidebar()
    e.preventDefault();
    navigate(`../search/${query}`, {state: query});
    // setQuery('');
    dispatch(closeSiderbarMobile());
    document.body.style.overflow = 'visible';

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
    <div className={style.containerForm}>
        <form className={style.formSearch} action="submit" onSubmit={handleSubmit} >
          <div >
            <input
              type="text" 
              placeholder='search'
              value={query}
              onChange={onChange} />
          </div>        
          <button 
            className='btn' 
            // onClick={handleClick}
            type='submit'
          >GO
            {/* <Link to={'/search'} props={query}>Go</Link> */}
          </button>
      </form>
      </div>
  )
}

export default SearchForm

