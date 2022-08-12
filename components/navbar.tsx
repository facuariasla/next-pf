import React, { useState } from "react";
import logo from "../public/assets/afwhitesvg.svg";
import Image from "next/image";
import styles from '../styles/Navbar.module.scss';
const Navbar = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav_logo}>
          <div className={styles.logo_container}>
            <a>
              <Image src={logo} width={80} height={80} alt='logo'/>
            </a>
          </div>
      </nav>
      <nav className={styles.menu_container}>
        <div className={styles.menu_circle}>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
