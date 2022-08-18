import styles from "../styles/Projects.module.scss";
import { projects } from "../data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./projectModal";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const setSelected = (el: any) => {
    setShowModal(true);
    setSelectedItem(el);
  };
  return (
    <div className={styles.projects_container}>
      <div>
        <h1>Projects</h1>
      </div>

      <section className={styles.all_projects}>
        {projects?.map((el: any) => (
          <motion.div key={el.id}>
            <motion.div
              layoutId={el.id}
              onClick={() => setSelected(el)}
              className={styles.project}
            >
              <motion.p>{el.title}</motion.p>
              <motion.p
                className={styles.details}
              >
                Description
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
        <ProjectModal
          layoutId={selectedItem?.id}
          showModal={showModal}
          cardData={selectedItem}
          setShowModal={setShowModal}
        />
      </section>
    </div>
  );
};

export default Projects;
