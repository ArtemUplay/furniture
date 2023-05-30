import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__container}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href='#' className={styles.menu__link}>
              Ростов
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href='#' className={styles.menu__link}>
              Акции
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href='#' className={styles.menu__link}>
              Сборка
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href='#' className={styles.menu__link}>
              Оплата
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href='#' className={styles.menu__link}>
              Доставка
            </a>
          </li>
        </ul>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href='#' className={styles.menu__link}>
              Наши работы
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href='#' className={styles.menu__link}>
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
