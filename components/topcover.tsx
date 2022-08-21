import React from "react";
import styles from "../styles/TopCover.module.scss";
const { motion } = require("framer-motion");

const TopCover = () => {
  return (
    <div className={styles.topcover_container}>
      <motion.div
        className={styles.topcover_image}
        initial={{ opacity: 0, color: '#fff' }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.h1>cool img goes here</motion.h1>
      </motion.div>
    </div>
  );
};

export default TopCover;
