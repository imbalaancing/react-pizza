import { useContext } from 'react';
import { SearchContext } from '../../App';
import styles from './Search.module.scss';

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <input
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      className={styles.root}
      type="text"
      placeholder="Поиск пиццы..."
    />
  );
}

export default Search;
