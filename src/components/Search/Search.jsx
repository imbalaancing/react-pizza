import React, { useContext, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';

function Search() {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
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
}

export default Search;
