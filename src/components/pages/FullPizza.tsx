import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

 type Ipizza={
  imageUrl:string
  name:string
 }
const FullPizza:React.FC= () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Ipizza>();
  
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62a7698997b6156bff8e050f.mockapi.io/pizzas/${id}`
        );
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
          <img className="" src={`${pizza.imageUrl}`} alt=""  />
        </div>
        <div className="pizza-main__right">
          <h2 className="pizza-main__title">{pizza.name}</h2>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
