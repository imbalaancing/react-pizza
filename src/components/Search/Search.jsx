import styles from './Search.module.scss';

function Search({ searchValue, setSearchValue }) {
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
