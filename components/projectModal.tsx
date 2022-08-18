import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/ProjectModal.module.scss";
import Image from "next/image";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const ProjectModal = ({ showModal, setShowModal, cardData }: any) => {

  const childAction = (event: any) => {
    // Funcion que evita que al clickear en la card, actue una funcion declarada en el nodo padre
    event.stopPropagation();
  };

  return (
    <AnimatePresence mode='wait' >
      {showModal && (
        // Agregar background que cubra todo el width y heigth
        <motion.div
          className={styles.modal_container}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className={styles.modal_content}
            onClick={(event) => childAction(event)}
            variants={backdrop}
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
                <a href={cardData?.link} target="_blank" rel={"noreferrer"}>
                  Check the page! →
                </a>
                <a href={cardData?.repo} target="_blank" rel={"noreferrer"}>
                  GitHub repository →
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
