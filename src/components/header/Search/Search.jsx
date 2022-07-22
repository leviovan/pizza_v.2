import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import { useCallback } from "react";
import { AppContext } from "../../../App";

import style from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  const inputRef = React.useRef("input");
  const [value, setValue] = useState();

  const updateSearh = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const onChangeSearch = (e) => {
    setValue(e.target.value);
    updateSearh(e.target.value);
  };

  return (
    <div className={style.root}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="20.000000px"
        height="20.000000px"
        viewBox="0 0 1280.000000 1180.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1180.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M4085 11794 c-22 -2 -96 -9 -165 -15 -758 -66 -1501 -326 -2119 -742
              -616 -416 -1090 -947 -1406 -1577 -198 -394 -323 -825 -377 -1295 -16 -142
              -16 -588 0 -730 57 -498 181 -913 401 -1340 614 -1195 1828 -2037 3236 -2245
              271 -40 347 -45 690 -45 343 1 455 9 722 51 1239 196 2324 880 2986 1881 508
              768 717 1690 587 2589 -168 1168 -894 2210 -1988 2853 -164 97 -474 246 -652
              314 -383 146 -756 235 -1185 282 -131 15 -639 28 -730 19z m640 -1209 c434
              -56 791 -169 1150 -363 665 -359 1176 -960 1389 -1630 89 -282 119 -485 119
              -792 0 -252 -10 -348 -59 -568 -183 -823 -775 -1540 -1589 -1928 -876 -417
              -1907 -418 -2785 -2 -499 236 -922 601 -1221 1053 -212 320 -350 681 -412
              1075 -28 181 -30 536 -4 715 90 607 357 1129 803 1567 538 529 1214 827 2019
              892 102 8 474 -4 590 -19z"
          />
          <path
            d="M8475 5047 c-291 -399 -736  -809 -1161 -1069 l-85 -52 33 -31 c18
-18 177 -164 353 -326 339 -312 2554 -2354 3378 -3114 269 -247 493 -451 497
-453 12 -4 1305 1189 1305 1203 0 7 -92 97 -205 201 -198 182 -1646 1517
-3263 3007 -428 394 -782 717 -785 717 -4 -1 -34 -38 -67 -83z"
          />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeSearch(e)}
        placeholder="Поиск пиццы... "
      />
      <svg
        onClick={() => onClickClear()}
        width="15"
        height="15"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="100" x2="100" y2="0" strokeWidth="5" stroke="black" />
        <line x1="0" y1="0" x2="100" y2="100" strokeWidth="5" stroke="black" />
      </svg>
    </div>
  );
};

export default Search;
