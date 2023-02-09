import React, {useState} from 'react';

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

export default Item