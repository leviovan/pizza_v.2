import React from "react";
import Skeleton from "../pizza/Skeleton";
import Category from "../category/Category";
import Sort, { sorts } from "../sort/Sort";
import Pizza from "../pizza/Pizza";
import { useEffect } from "react";
import Pagination from "../pagination/Pagination";
import { useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setParams, sortActiveType } from "../../Redux/store/Slice/filterSlice";
import { useRef } from "react";
import { fetchPizza } from "../../Redux/store/Slice/PizzaSlice";
import { RootState, useAppDispatch } from "../../Redux/store/store";


const Home = () => {
  const isSearth = useRef(false);
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();
  const searchValue = useSelector((state:RootState) => state.filter.searchValue);
  const navigate = useNavigate();
  const { items, isLoading } = useSelector((state:RootState) => state.pizza);
  const {
    categoryNumber: categorySelected,
    sortActive: sort,
    pageCounter: pageCounter,
  } = useSelector((state:RootState) => state.filter);

  const categoryURL =
    categorySelected > 0 ? `category=${categorySelected}` : "";

  const fetchPizzas = async () => {
    dispatch(
      fetchPizza({
        categoryURL,
        sort,
        searchValue,
        pageCounter,
      })
    );
  };

  useEffect(() => {
    fetchPizzas();
    if (window.location.search) {
      let params = qs.parse(window.location.search.substring(1));
      const {sort} = sorts.find((obj:sortActiveType) => obj.sort === params.sort);
      //@ts-ignore
      dispatch(setParams({...params,sort}));
    }
    isSearth.current = true;
  }, []);

  useEffect(() => {
    if (!isSearth.current) {
      fetchPizzas();
    }
    isSearth.current = false;
  }, [categorySelected, sort.sort, searchValue, pageCounter]);

  useEffect(() => {
    if (isMounted.current) {
      const querySelection = qs.stringify({
        categorySelected,
        sort: sort.sort,
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
            ? [...Array(items.length)].map((_, index) => (
                <Skeleton key={`Pizza_${index}`} />
              ))
            : items.map((obj, index:number) => (
                <Pizza key={`Pizza_${index}`} {...obj} />
              ))}
        </div>
      </div>
      <Pagination value={pageCounter} />
    </>
  );
};

export default Home;
