import styles from './Image.module.scss';

const Image = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image}></div>
      </div>
    </section>
  );
};

export default Image;
