import React from 'react';
import Skeleton from '../pizza/Skeleton';
import Category from '../category/Category';
import Sort from '../sort/Sort';
import Pizza from '../pizza/Pizza';
import { useEffect, useState } from 'react';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://62a7698997b6156bff8e050f.mockapi.io/pizzas')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setIsLoading(false);
        setPizzas(arr);
      });
  }, []);

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
            ? [...Array(8)].map((_, index) => <Skeleton />)
            : pizzas.map((obj, index) => <Pizza key={`Pizza_${index}`} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
