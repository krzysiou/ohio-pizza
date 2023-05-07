import { Pizza } from 'types';
import { PizzaContainerStyled } from './PizzaContainer.styles';

const PizzaContainer: React.FC<{ pizza: Pizza }> = ({ pizza }) => {
  return (
    <PizzaContainerStyled
      imageUrl={
        pizza.imageUrl ||
        'https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000'
      }
    >
      <div>
        <p>{pizza.name}</p>
        <div>
          {pizza.ingredients.map((ingredient) => (
            <p key={ingredient}>{ingredient}</p>
          ))}
        </div>
      </div>
    </PizzaContainerStyled>
  );
};

export { PizzaContainer };
