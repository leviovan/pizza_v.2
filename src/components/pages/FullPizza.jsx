import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62a7698997b6156bff8e050f.mockapi.io/pizzas/${id}`
        );
        // console.log(data);
        setPizza(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>Загрузка</div>;
  }
  console.log(pizza);
  return (
    <div className="container">
      <div className="pizza-main">
        <div className="pizza-main__left">
          <img className="" src={`${pizza.imageUrl}`} alt="" srcset="" />
        </div>
        <div className="pizza-main__right">
          <p>
            <span>Название</span>:{pizza.name}
          </p>
          <p>
            <span>Название</span>:{pizza.name}
          </p>
          <p>
            <span>Название</span>:{pizza.name}
          </p>
          <p>
            <span>Название</span>:{pizza.name}
          </p>
          <p>
            <span>Название</span>:{pizza.name}
          </p>
          <p>
            <span>Название</span>:{pizza.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
