import { PizzaContainer } from 'components/common';
import useFetch from 'hooks/useFetch';
import React from 'react';
import { type Pizza } from 'types';

const Menu: React.FC = () => {
  const { data: pizzas, loading } = useFetch<Pizza[]>(
    'http://localhost:3001/pizza'
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {pizzas &&
          pizzas.map((pizza) => (
            <PizzaContainer key={pizza.name} pizza={pizza} />
          ))}
      </div>
    </>
  );
};

export { Menu };
