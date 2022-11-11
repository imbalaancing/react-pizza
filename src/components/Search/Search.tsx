import React, { useContext, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

const Search: React.FC = () => {
  const [value, setValue] = useState('');
  const { setSearchValue }: any = useContext(SearchContext);

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChangeInput}
      className={styles.root}
      type="text"
      placeholder="Поиск пиццы..."
    />
  );
};

export default Search;
