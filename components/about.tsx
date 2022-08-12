import React from 'react'
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <section className={styles.about_container}>
      <div className={styles.about_title}>
        <h1>about me</h1>
      </div>
      <div className={styles.about_description}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum dolores, vero eveniet architecto exercitationem? Impedit, ipsam voluptas ipsum quo, numquam error dignissimos atque sunt ex perferendis, odio voluptatibus iusto?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita cum reiciendis eos vel possimus, neque nesciunt praesentium a voluptatibus labore laborum officia officiis doloribus iure. Soluta voluptas natus aliquid?</p>
      </div>
    </section>
  )
}

export default About