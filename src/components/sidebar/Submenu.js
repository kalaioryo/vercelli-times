import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import style from './sidebar.module.css';


const Submenu = ({isShown}) => {
  // const [isShown, setIsShown] = useState(true);

  return (
    <>
      {isShown ? <span>World</span> : null}
    </>

    // <span id='subMenu'  className={ isShown ? style.visible : style.listSubSection}>
    //     <Link to='#'>
    //       subMenu
    //     </Link>
    // </span>
  )
}

export default Submenu