import React from 'react'
import styles from '../styles/TopCover.module.scss'

const TopCover = () => {
  return (
    <div className={styles.topcover_container}>
      <div className={styles.topcover_image}>
        <h1>some cool img</h1>
      </div>
    </div>
  )
}

export default TopCover