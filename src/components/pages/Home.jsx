import React, { useContext } from 'react';
import Skeleton from '../pizza/Skeleton';
import Category from '../category/Category';
import Sort from '../sort/Sort';
import Pizza from '../pizza/Pizza';
import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import { AppContext } from '../../App';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const { categotyNumber: categoryNumber, sortActive: sortNumber } = useSelector(
    (state) => state.filter,
  );
  const categoryURL = categoryNumber > 0 ? `category=${categoryNumber}` : '';

  const { searchValue } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://62a7698997b6156bff8e050f.mockapi.io/pizzas?${categoryURL}&sortBy=${sortNumber.sort}&order=asc&search=${searchValue}&page=${pageNumber}&limit=4`,
      )
      .then((arr) => {
        setIsLoading(false);
        setPizzas(arr.data);
      });
  }, [categoryNumber, sortNumber, searchValue, pageNumber]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Category />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...Array(pizzas.length)].map((_, index) => <Skeleton key={`Pizza_${index}`} />)
            : pizzas.map((obj, index) => <Pizza key={`Pizza_${index}`} {...obj} />)}
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} />
    </>
  );
};

export default Home;
