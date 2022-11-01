import React, { useState, useEffect } from 'react';

import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setIsLoading(true);

    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://635e2b4eed25a0b5fe3fdb84.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=desc${search}`
    )
      .then((response) => {
        return response.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
}

export default Home;
