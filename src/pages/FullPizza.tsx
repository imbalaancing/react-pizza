import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://635e2b4eed25a0b5fe3fdb84.mockapi.io/items/' + id
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} руб.</h4>
    </div>
  );
};

export default FullPizza;
