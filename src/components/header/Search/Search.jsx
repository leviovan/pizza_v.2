import React from 'react';

import style from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
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
