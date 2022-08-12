import styles from "../styles/Projects.module.scss";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <div>
        <h1>Projects</h1>
      </div>

      <section className={styles.all_projects}>
        {projects?.map((el: any) => (
          <div className={styles.project}>
            <p>{el.title}</p>
            <p className={styles.details}>Description</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
