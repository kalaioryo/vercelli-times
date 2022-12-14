import React from 'react';
import style from './footer.module.css';

function Footer() {
  return (
    <div className={style.footer}>
      <p>Made with love Antonio Iorio</p>
      <img src='https://developer.nytimes.com/files/poweredby_nytimes_200c.png?v=1583354208354'/>
    </div>
  );
}

export default Footer;
