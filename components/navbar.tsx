import { useState } from "react";
import logo from "../public/assets/afwhite.png";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
const { motion } = require("framer-motion");

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const childAction = (event: any) => {
    // Funcion que evita que al clickear en la card, actue una funcion declarada en el nodo padre
    event.stopPropagation();
  };

  const boxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // delay de 1s al entrar
        // delay: 1, 
        // // se agregan los child, despues del parent
        // when: 'beforeChildren',
        // staggerChildren: .5, // (agrega cada child 1 por 1, con delay de .5s)
      },
    },
  };
  const boxChildVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
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
            <Image src={logo} width={70} height={70} alt="logo" />
          </motion.a>
        </motion.div>
      </motion.nav>

      <nav className={styles.menu_container}>
        {/* <div className={styles.menu_circle}>
        </div> */}
        <motion.div
          className={styles.menu_circle}
          onClick={() => setActiveMenu(!activeMenu)}
          variants={boxVariant}
          animate="visible"
          initial="hidden"

          // transition={{ delay: 1 }}
        >
          <motion.div
            className={styles.menu_content}
            onClick={(event: any) => childAction(event)}
            variants={boxChildVariant}
            // transition={{ delay: .5}}
          >
            <motion.a href="#projects">PROJECTS</motion.a>
            <motion.a href="#contact">CONTACT</motion.a>
          </motion.div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
