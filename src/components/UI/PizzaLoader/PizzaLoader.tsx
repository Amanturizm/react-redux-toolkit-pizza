import React from 'react';
import './PizzaLoader.css';

const PizzaLoader = () => {
  const pizzaItem = Array.from(Array(12), (_, index) => <div key={`pizza-slice-${index}`}/>);

  return (
    <div className="pizza-loader-wrap">
      <div className="pizza-loader">
        {pizzaItem}
      </div>
    </div>
  );
};

export default PizzaLoader;