import React from 'react';
import Skeleton from '../pizza/Skeleton';
import Category from '../category/Category';
import Sort from '../sort/Sort';
import Pizza from '../pizza/Pizza';
import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';

const Home = ({ searchValue }) => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [activeSort, setActiveSort] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const sorts = [
    { sort: 'rating', name: 'популярности' },
    { sort: 'price', name: 'цене' },
    { sort: 'name', name: 'алфавиту' },
  ];
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62a7698997b6156bff8e050f.mockapi.io/pizzas?${
        categoryIndex > 0 ? `category=${categoryIndex}` : ''
      }&sortBy=${
        sorts[activeSort].sort
      }&order=asc&search=${searchValue}&page=${pageNumber}&limit=4`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setIsLoading(false);
        setPizzas(arr);
      });
  }, [categoryIndex, activeSort, searchValue, pageNumber]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Category categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} />
          <Sort sorts={sorts} activeSort={activeSort} setActiveSort={setActiveSort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...Array(pizzas.length)].map((_, index) => <Skeleton />)
            : pizzas.map((obj, index) => <Pizza key={`Pizza_${index}`} {...obj} />)}
        </div>
      </div>
      <Pagination setPageNumber={setPageNumber} />
    </>
  );
};

export default Home;
