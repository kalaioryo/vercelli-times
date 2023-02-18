import React, {useState} from 'react';

import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

import Submenu from './Submenu';

import style from './item.module.css';

const Item = ({item}) => {
  const [isShown, setIsShown] = useState(false);
  const handleMouseEnter = () => setIsShown(true)
  const handleMouseLeave = () => setIsShown(false)

  const {path, id, name, cName, subSection} = item;
  
  return(
    <>
      <li 
        key={id} 
        className={style.list}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
      <Link to={`${path}`} className={style.navText}>
        <span className={style.itemList}>{name}</span>
      </Link>

    { isShown && subSection ? <Submenu subSection={subSection} cName={cName}/> : null}
      </li>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    cName: PropTypes.object,
    subSection: PropTypes.PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ])
  })
}

export default Item