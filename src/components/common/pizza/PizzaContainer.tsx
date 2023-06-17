import pizzaPlaceholder from 'assets/pizza-img-placeholder.png';
import { Pizza } from 'types';
import { PizzaContainerStyled } from './PizzaContainer.styles';

const PizzaContainer: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  return (
    <PizzaContainerStyled imageUrl={pizza.pic_url || pizzaPlaceholder}>
      <div>
        <p className="pizza-name">{pizza.name}</p>
        <div>
          {pizza.ingredients.map((ingredient) => (
            <p className="ingredient" key={ingredient}>
              ✓ {ingredient}
            </p>
          ))}
        </div>
        <p className="price">${pizza.price}</p>
      </div>
    </PizzaContainerStyled>
  );
};

export { PizzaContainer };
