import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../../Redux/store/Slice/cartSlice";
import { RootState, useAppDispatch } from "../../Redux/store/store";


type IPizza={
  id:string,
  sizes:string[],
  types:string[],
  count?:number,
  imageUrl:string,
  name:string,
  price:number
}
const Pizza:React.FC<IPizza> = ({ id, name, imageUrl, price, sizes, types,count }) => {
  const [pizzaCount, setpizzaCount] = useState(0);
  const [pizzaSize, setpizzaSize] = useState(sizes[0]);
  const [pizzaActiveType, setPizzaActiveType] = useState(0);
  const typesPizza = ["Тонкое", "Традиционное"];
  const dispatch = useAppDispatch();

  const items = useSelector((state:RootState) => state.cart);
  const addPizzaInCart = () => {
    setpizzaCount(pizzaCount + 1);
    
    const item = {
      id,
      name,
      price,
      imageUrl,
      type: typesPizza[pizzaActiveType],
      size: pizzaSize,
      count: count
    };
    dispatch(addCartItem(item));
  };
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`pizza/${id}`}>
          {" "}
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type:string, index) => (
              <li
                onClick={() => {
                  setPizzaActiveType(index);
                }}
                className={index === pizzaActiveType ? "active" : ""}
                key={`type_${index}`}
              >
                {typesPizza[index]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size:string) => (
              <li
                key={size}
                onClick={() => setpizzaSize(size)}
                className={pizzaSize === size ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div
            onClick={() => addPizzaInCart()}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{pizzaCount}</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
