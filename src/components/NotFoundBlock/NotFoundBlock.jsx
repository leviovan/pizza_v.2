import React from 'react';

import Styles from './NotFoundBlock.module.css';

console.log(Styles);
const NotFoundBlock = () => {
  return (
    <div className={Styles.text}>
      <h1>СТРАНИЦА НЕ НАЙДЕНА</h1>
    </div>
  );
};

export default NotFoundBlock;
