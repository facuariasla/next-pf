import { useState } from "react";
import logo from "../public/assets/afwhitesvg.svg";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
const { motion } = require("framer-motion");

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const childAction = (event: any) => {
    // Funcion que evita que al clickear en la card, actue una funcion declarada en el nodo padre
    event.stopPropagation();
  };
  return (
    <header className={styles.header}>
      <motion.nav
        className={styles.nav_logo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.div className={styles.logo_container}>
          <motion.a>
            <Image src={logo} width={80} height={80} alt="logo" />
          </motion.a>
        </motion.div>
      </motion.nav>
      <nav className={styles.menu_container}>
        {/* <div className={styles.menu_circle}>
        </div> */}
        <motion.div
          className={styles.menu_circle}
          onClick={() => setActiveMenu(!activeMenu)}
          animate={{
            width: activeMenu ? "210px" : "50px",
            border: activeMenu ? "5px solid white" : "15px solid #fff",
            borderTopRightRadius: activeMenu ? "10px" : "30px",
          }}
          transition={{ delay: 0.1 }}

          // transition={{ delay: 1 }}
        >
          <motion.div
            clasName={styles.menu_content}
            onClick={(event: any) => childAction(event)}
            animate={{ opacity: activeMenu ? 1 : 0 }}
            // transition={{ delay: .5}}
          >
            {activeMenu && (
              <div style={{ display: "flex" }}>
                <motion.a href="#projects">PROJECTS</motion.a>
                <motion.a href="#contact">CONTACT</motion.a>
              </div>
            )}
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
