import Location from '../../assets/location.svg';
import Delivery from '../../assets/delivery.svg';
import Garanty from '../../assets/garanty.svg';
import Price from '../../assets/price.svg';

import styles from './Advantages.module.scss';

const Advantages = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>НАШИ ПРЕИМУЩЕСТВА</h2>
        <ul className={styles.section__list}>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={Location}
              alt='Геолокация'
            />
            <span>Удобное расположение магазина</span>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={Delivery}
              alt='Доставка'
            />
            <span>Быстрая доставка</span>
          </li>
          <li className={styles.section__item}>
            <img className={styles.section__image} src={Price} alt='Цена' />
            <span>Низкие цены</span>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={Garanty}
              alt='Гарантия'
            />
            <span>Гарантия качества</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
