import React from 'react'
import styles from '../styles/TopCover.module.scss'
const { motion } = require("framer-motion");

const TopCover = () => {
  return (
    <div className={styles.topcover_container}>
      <motion.div className={styles.topcover_image} initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ delay: .1 }}>
        <h1>some cool img</h1>
      </motion.div>
    </div>
  )
}

export default TopCover