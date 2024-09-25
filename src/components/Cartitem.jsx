import { useState } from "react";
import Counter from "./Counter";

function Cartitem({ product, onCartUpdate, onCheckoutUpdate }) {
  const [count, setCount] = useState(0);
  const [ttlprice, setPrice] = useState(0);

  const decrement = () => {
    setCount((state) => {
      if (state === 0) return state; 
      const newCount = state - 1;

      updateTotalPrice(newCount);
      onCartUpdate(-1);
      onCheckoutUpdate(-product.price);

      return newCount;
    });
  };

  const increment = () => {
    setCount((state) => {
      const newCount = state + 1;

      updateTotalPrice(newCount);
      onCartUpdate(1);
      onCheckoutUpdate(product.price);

      return newCount;
    });
  };

  const updateTotalPrice = (newCount) => {
    const total = newCount * product.price;
    setPrice(total);
  };

  return (
    <div className="content-product flex flex-wrap justify-between items-center my-3">
      <div className="product-img flex justify-center items-center">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info flex flex-col">
        <h4 className="font-bold py-3">{product.title}</h4>
        <h6>${product.price.toFixed(2)}</h6>
      </div>

      <Counter count={count} increment={increment} decrement={decrement} />

      <div className="total-price flex flex-col items-center">
        <h6 className="py-3">Total Price</h6>
        <h6 className="font-bold">${ttlprice.toFixed(2)}</h6>
      </div>
    </div>
  );
}

export default Cartitem;
