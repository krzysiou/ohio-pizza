import pizzaPlaceholder from 'assets/pizza-img-placeholder.png';
import { Pizza } from 'types';
import { PizzaContainerStyled } from './PizzaContainer.styles';

const PizzaContainer: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  return (
    <PizzaContainerStyled imageUrl={pizza.imageUrl || pizzaPlaceholder}>
      <div>
        <p>{pizza.name}</p>
        <div>
          {pizza.ingredients.map((ingredient) => (
            <p key={ingredient}>{ingredient}</p>
          ))}
        </div>
        <p>${pizza.price}</p>
      </div>
    </PizzaContainerStyled>
  );
};

export { PizzaContainer };
