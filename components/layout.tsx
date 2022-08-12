import Footer from "./footer";
import Navbar from "./navbar";
import styles from '../styles/Layout.module.scss'


const Layout = ({ children }: any) => {
  return (
    <div className={styles.layout_container}>
    <div className={styles.layout}>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
    </div>
  );
};

export default Layout;
