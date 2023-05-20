import React from "react";
import styles from "../styles/TopCover.module.scss";
import Image from "next/image";
const { motion } = require("framer-motion");
import bg1 from "../public/assets/img011.jpg";

const TopCover = () => {
  return (
    <div className={styles.topcover_container}>
      <motion.div
        className={styles.topcover_image}
        initial={{ opacity: 0, color: "#fff" }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {/* <motion.h1></motion.h1> */}
        {/* <div>something</div> */}
        <div className={styles.actor}></div>
        <div className={styles.actor}></div>
        <div className={styles.actor}></div>
        <div className={styles.actor}></div>

      </motion.div>
    </div>
  );
};

export default TopCover;
