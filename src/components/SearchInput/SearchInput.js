import styles from './SearchInput.module.scss';

const SearchInput = () => {
  return (
    <form className={styles.form}>
      <svg
        className={styles['form__search-icon']}
        enableBackground='new 0 0 50 50'
        height='50px'
        id='Layer_1'
        version='1.1'
        viewBox='0 0 50 50'
        width='50px'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect fill='none' height='50' width='50' />
        <circle
          cx='21'
          cy='20'
          fill='none'
          r='16'
          stroke='#000000'
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='2'
        />
        <line
          fill='none'
          stroke='#000000'
          strokeMiterlimit='10'
          strokeWidth='4'
          x1='32.229'
          x2='45.5'
          y1='32.229'
          y2='45.5'
        />
      </svg>
      <input
        className={styles.form__field}
        type='text'
        placeholder='Поиск...'
      />
    </form>
  );
};

export default SearchInput;
