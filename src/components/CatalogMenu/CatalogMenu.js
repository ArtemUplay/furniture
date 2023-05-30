import styles from './CatalogMenu.module.scss';

const CatalogMenu = () => {
  return (
    <div className={styles['catalog-menu']}>
      <div className={styles['catalog-menu__container']}>
        <ul className={styles['catalog-menu__list']}>
          <li className={styles['catalog-menu__item']}>
            <a href='#' className={styles['catalog-menu__link']}>
              КУХНИ{' '}
            </a>
          </li>
          <li className={styles['catalog-menu__item']}>
            <a href='#' className={styles['catalog-menu__link']}>
              ГОСТИННЫЕ
            </a>
          </li>
          <li className={styles['catalog-menu__item']}>
            <a href='#' className={styles['catalog-menu__link']}>
              СПАЛЬНИ
            </a>
          </li>
          <li className={styles['catalog-menu__item']}>
            <a href='#' className={styles['catalog-menu__link']}>
              ПРИХОЖИЕ
            </a>
          </li>
          <li className={styles['catalog-menu__item']}>
            <a href='#' className={styles['catalog-menu__link']}>
              ШКАФЫ -КУПЕ
            </a>
          </li>
          <li className={styles['catalog-menu__item']}>
            <a href='#' className={styles['catalog-menu__link']}>
              ДЕТСКИЕ{' '}
            </a>
          </li>
          <li className={styles['catalog-menu__item']}>
            <a href='#' className={styles['catalog-menu__link']}>
              ДИВАНЫ
            </a>
          </li>
        </ul>
        <button className={styles['catalog-menu__button']}>
          ГДЕ ПОСМОТРЕТЬ
        </button>
      </div>
    </div>
  );
};

export default CatalogMenu;
