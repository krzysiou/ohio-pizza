import { useCallback } from 'react';
import useFetch from 'hooks/useFetch';
import { Pizza } from 'types';
import { EditPizzaStyled } from './EditPizza.styles';
import { useState } from 'react';
import axios from 'axios';

interface EditPizzaProps {
  auth: string;
}

const EditPizza: React.FC<EditPizzaProps> = ({ auth }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(10);
  const [image, setImage] = useState<string>('');
  const { data: pizzas } = useFetch<Pizza[]>(
    'http://localhost:3001/pizza'
  );

  const handleSavePizza = useCallback(async () => {
    if (name === '' || ingredients.length === 0 || price === 0) {
      return;
    }
    console.log(name, price, ingredients, image);

    const res = await axios.post(
      'http://localhost:3001/admin/add-pizza',
      {
        name,
        price,
        ingredients,
        image,
      },
      { headers: { Authorization: `Bearer ${auth}` } }
    );
    if (res.status === 200) {
      window.location.reload();
    }
  }, [name, price, ingredients]);

  const handleDelete = useCallback(
    async (id: number) => {
      const res = await axios.post(
        'http://localhost:3001/admin/delete-pizza',
        {
          pizzaId: id,
        },
        { headers: { Authorization: `Bearer ${auth}` } }
      );
      if (res) {
        window.location.reload();
      }
    },
    [auth]
  );

  const handleChangeIngredient = useCallback(
    (event: React.FormEvent<HTMLInputElement>, index: number) => {
      const newIngredients = [...ingredients];
      if (event.currentTarget.value === '') {
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
        return;
      }
      newIngredients[index] = event.currentTarget.value;
      setIngredients(newIngredients);
    },
    [ingredients]
  );

  return (
    <EditPizzaStyled>
      <div className="pizza-container">
        {pizzas &&
          pizzas.map((pizza) => (
            <div className="pizza-box" key={pizza.pizza_id}>
              <span className="name">
                {pizza.name}{' '}
                <span
                  className="delete-btn"
                  onClick={() => handleDelete(pizza.pizza_id)}
                >
                  X
                </span>
              </span>
              {pizza.ingredients.map((ingredient) => (
                <span className="ingredient" key={ingredient}>
                  {ingredient}
                </span>
              ))}
              <span className="price">${pizza.price}</span>
            </div>
          ))}
      </div>

      <form>
        <input
          type="text"
          placeholder="Pizza Name"
          className="name-input"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        {ingredients &&
          [...ingredients, ''].map((ingredient, index) => (
            <div key={index}>
              <span>{index + 1}</span>
              <input
                type="text"
                value={ingredient}
                placeholder="Ingredient"
                className="ingredient-input"
                onChange={(e) => handleChangeIngredient(e, index)}
              />
            </div>
          ))}
        <div className="price-container">
          <span>$</span>
          <input
            type="number"
            placeholder="Price"
            className="price-input"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.currentTarget.value))}
          />
        </div>
        <input
          type="text"
          placeholder="Image URL"
          className="image-input"
          value={image}
          onChange={(e) => setImage(e.currentTarget.value)}
        />
        <button type="button" className="submit" onClick={handleSavePizza}>
          Add Pizza
        </button>
      </form>
    </EditPizzaStyled>
  );
};

export { EditPizza };
