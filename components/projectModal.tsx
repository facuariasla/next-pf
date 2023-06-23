import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/ProjectModal.module.scss";

const backdrop = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 2 },
  },
};

const ProjectModal = ({ showModal, setShowModal, cardData }: any) => {
  const childAction = (event: any) => {
    // Funcion que evita que al clickear en la card, actue una funcion declarada en el nodo padre
    event.stopPropagation();
  };

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        // Agregar background que cubra todo el width y heigth
        <motion.div
          className={styles.modal_container}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className={styles.modal_content}
            onClick={(event) => childAction(event)}
            variants={backdrop}
            initial="hidden"
            animate="visible"
          >
            <p className={styles.close} onClick={() => setShowModal(false)}>
              X
            </p>
            <div className={styles.card_content}>
              <div>
                <h2>{cardData?.title}</h2>
              </div>
              <div>
                <p>{cardData?.desc}</p>
              </div>
              <div className={styles.links}>
                {cardData?.linkedinPost ? (
                  <a
                    href={cardData?.linkedinPost}
                    target="_blank"
                    rel={"noreferrer"}
                  >
                    Post →
                  </a>
                ) : (
                  ""
                )}
                <a href={cardData?.link} target="_blank" rel={"noreferrer"}>
                  👁 Check the page! →
                </a>
                <a href={cardData?.repo} target="_blank" rel={"noreferrer"}>
                  GitHub repository (code details) →
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
