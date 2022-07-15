import React, { useContext } from 'react';
import { AppContext } from '../../../App';

import style from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  return (
    <div className={style.root}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск пиццы... "
      />
    </div>
  );
};

export default Search;
