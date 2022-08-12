import styles from "../styles/Tech.module.scss";
import { techdata } from "../data";

const Techonologies = () => {
  return (
    <div className={styles.technologies_container}>
      <div className={styles.description_container}>
        <h1>PERN STACK</h1>
        <p>[PostgreSQL, Express, React, Node]</p>
        <p>JavaScript/TypeScript</p>
        {/* <div className={styles.description}>
          <div className={styles.front_back}>
            <div>
              <p>
                <strong>Frontend </strong>
              </p>
              <p>
                React-NextJS, CSS3 (Sass, Styled-Comp, ChakraUI, Bootstrap &
                others)
              </p>
            </div>
            <div>
              <p>
                <strong>~Backend</strong>
              </p>
              <p>NodeJS, Express, PostgreSQL, Sequelize & Firebase</p>
            </div>
          </div>
        </div> */}
      </div>
      {/* Icons container */}
      <div className={styles.tech_container}>
        {techdata?.map((el: any) => (
          <div key={el.id} className={styles.tech}>
            <el.icon className={styles.icons} />
            <p>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techonologies;
