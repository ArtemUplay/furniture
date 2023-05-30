import Advantages from '../Advantages/Advantages';
import Catalog from '../Catalog/Catalog';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import Header from '../Header/Header';
import Image from '../Image/Image';
import Menu from '../Menu/Menu';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.page}>
      <Menu />
      <Header />
      <CatalogMenu />
      <Image />
      <Advantages />
      <Catalog />
    </div>
  );
}

export default App;
