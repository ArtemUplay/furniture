import styles from './Catalog.module.scss';
import Kitchens from '../../assets/кухни.jpg';
import LivingRooms from '../../assets/гостинные.jpg';
import BedRooms from '../../assets/спальни.jpg';
import Hallways from '../../assets/прихожие.jpg';
import Wardrobes from '../../assets/шкафы-купе.jpg';
import ChildrensRoom from '../../assets/детские.jpg';
import Sofas from '../../assets/диваны.jpg';
import Chairs from '../../assets/стулья.jpg';

const Catalog = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>КАТАЛОГ</h2>
        <ul className={styles.section__list}>
          <li className={styles.section__item}>
            <img className={styles.section__image} src={Kitchens} alt='КУХНИ' />
            <h3 className={styles['section__image-title']}>КУХНИ</h3>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={LivingRooms}
              alt='ГОСТИННЫЕ'
            />
            <h3 className={styles['section__image-title']}>ГОСТИННЫЕ</h3>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={BedRooms}
              alt='СПАЛЬНИ'
            />
            <h3 className={styles['section__image-title']}>СПАЛЬНИ</h3>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={Hallways}
              alt='ПРИХОЖИЕ'
            />
            <h3 className={styles['section__image-title']}>ПРИХОЖИЕ</h3>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={Wardrobes}
              alt='ШКАФЫ-КУПЕ'
            />
            <h3 className={styles['section__image-title']}>ШКАФЫ-КУПЕ</h3>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={ChildrensRoom}
              alt='ДЕТСКИЕ'
            />
            <h3 className={styles['section__image-title']}>ДЕТСКИЕ</h3>
          </li>
          <li className={styles.section__item}>
            <img className={styles.section__image} src={Sofas} alt='ДИВАНЫ' />
            <h3 className={styles['section__image-title']}>ДИВАНЫ</h3>
          </li>
          <li className={styles.section__item}>
            <img
              className={styles.section__image}
              src={Chairs}
              alt='СТОЛЫ И СТУЛЬЯ'
            />
            <h3 className={styles['section__image-title']}>СТОЛЫ И СТУЛЬЯ</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
