import Logo from '../../assets/logo.png';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href='#'>
          <img src={Logo} alt='Лого' />
        </a>
        <div className={styles.header__address}>
          <span className={`${styles['header__address-text']}`}>
            ул. Московская, 144 корп. - 1
          </span>
          <a href='#' className={`${styles['header__address-link']}`}>
            Схема проезда
          </a>
        </div>
        <SearchInput />
        <div className={styles.header__call}>
          <span className={`${styles['header__call-number']}`}>
            <svg
              width='20'
              height='19'
              viewBox='0 0 20 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.8958 19C14.435 18.9998 15.8115 18.4836 16.8763 17.4187L18.4314 15.8638C19.2069 15.0879 19.2069 13.8253 18.4312 13.0498L16.0684 10.687C15.6642 10.2825 15.1061 10.0726 14.5342 10.108C13.9636 10.1446 13.4358 10.4252 13.0864 10.8776L11.5539 12.8621C10.4392 12.2637 9.39867 11.4848 8.45685 10.5428C7.51984 9.6058 6.74375 8.57103 6.14674 7.46374L8.1363 5.92742C8.58869 5.57818 8.86932 5.05067 8.9059 4.48023C8.94252 3.90963 8.7316 3.35028 8.32711 2.94579L5.96451 0.582976C5.5887 0.206958 5.089 0 4.55729 0C4.02579 0 3.52611 0.206947 3.15049 0.582976L1.91362 1.81942C1.78598 1.92781 1.67989 2.0249 1.58133 2.12325C-1.299 5.00315 -0.165453 10.1595 4.33712 14.6618C7.17513 17.5 10.2724 18.9997 12.8956 18.9997L12.8958 19ZM2.52937 3.07221C2.616 2.98579 2.70723 2.90481 2.80014 2.82676C2.81458 2.81442 2.8286 2.80165 2.8422 2.78805L4.09895 1.53152C4.22136 1.40889 4.38415 1.34152 4.5572 1.34152C4.73046 1.34152 4.89325 1.40889 5.01588 1.53152L7.37848 3.89433C7.51219 4.02825 7.57935 4.2059 7.56721 4.39443C7.55508 4.58296 7.46594 4.75036 7.31633 4.86608L5.05872 6.60933C4.70383 6.88344 4.59231 7.37143 4.79339 7.77025C5.47285 9.11758 6.38617 10.3695 7.50799 11.4913C8.63478 12.6183 9.89362 13.535 11.2498 14.2157C11.6478 14.4153 12.1351 14.3038 12.4086 13.9498L14.1477 11.6976C14.2632 11.548 14.4308 11.4589 14.6193 11.4469C14.8085 11.4331 14.9855 11.502 15.1192 11.6355L17.482 13.9983C17.7348 14.2511 17.7346 14.6626 17.482 14.9154L15.9271 16.4703C13.6051 18.7917 9.22904 17.6587 5.28486 13.7143C1.34137 9.76976 0.208099 5.39366 2.52945 3.07204L2.52937 3.07221Z'
                fill='#1D1818'
              />
            </svg>
            8 (961) 525 91 91
          </span>
          <button className={`${styles['header__call-button']}`}>
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
