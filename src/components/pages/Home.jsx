import React, { useContext } from "react";
import Skeleton from "../pizza/Skeleton";
import Category from "../category/Category";
import Sort, { sorts } from "../sort/Sort";
import Pizza from "../pizza/Pizza";
import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { AppContext } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setParams } from "../../Redux/store/Slice/filterSlice";
import { useRef } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const isSearth = useRef(false);
  const isMounted = useRef(false);
  const {
    categotyNumber: categorySelected,
    sortActive: sort,
    pageCounter: pageCounter,
  } = useSelector((state) => state.filter);

  const categoryURL =
    categorySelected > 0 ? `category=${categorySelected}` : "";
  const { searchValue } = useContext(AppContext);

  const navigate = useNavigate();
  const fetchPizzas = () => {
    setIsLoading(true);
    axios
      .get(
        `https://62a7698997b6156bff8e050f.mockapi.io/pizzas?${categoryURL}&sortBy=${sort.sort}&order=asc&search=${searchValue}&page=${pageCounter}&limit=4`
      )
      .then((arr) => {
        setIsLoading(false);
        setPizzas(arr.data);
      });
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sorts.find((obj) => obj.sort === params.sort.sort);
      console.log(params, sort);
      dispatch(setParams({ ...params, sort }));
    }
    isSearth.current = true;
  }, []);

  useEffect(() => {
    if (!isSearth.current) {
      fetchPizzas();
    }
    isSearth.current = false;
  }, [categorySelected, sort, searchValue, pageCounter]);

  useEffect(() => {
    if (isMounted.current) {
      const querySelection = qs.stringify({
        categorySelected,
        sort,
        pageCounter,
      });
      navigate(`?${querySelection}`);
    }
    isMounted.current = true;
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
            ? [...Array(pizzas.length)].map((_, index) => (
                <Skeleton key={`Pizza_${index}`} />
              ))
            : pizzas.map((obj, index) => (
                <Pizza key={`Pizza_${index}`} {...obj} />
              ))}
        </div>
      </div>
      <Pagination value={pageCounter} />
    </>
  );
};

export default Home;
