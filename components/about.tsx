import React from "react";
import styles from "../styles/About.module.scss";
const { motion } = require("framer-motion");
import { GiMountaintop, GiMineralPearls } from "react-icons/gi";

const About = () => {
  return (
    <motion.div
      className={styles.about_container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className={styles.about_title}>
        <h1>about me</h1>
      </div>
      <div className={styles.about_description}>
        <div>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum dolores, vero eveniet architecto exercitationem? Impedit, ipsam voluptas ipsum quo, numquam error dignissimos atque sunt ex perferendis, odio voluptatibus iusto?</p> */}

          <p>28 y/o Fullstack Developer, with experiencie on</p>
          <p>
            Backend with <strong>Node</strong>
          </p>
          <p>
            Web with <strong>React/Next & ~Vue2</strong>
          </p>
          <p>
            Mobile with <strong>Flutter</strong>
          </p>
          {/* <p>I was a Geology (?¿) student.</p> */}

          {/* <motion.div >
            <motion.p>
              (╯°□°）╯︵ ┻━┻ <GiMineralPearls />)
            </motion.p>
          </motion.div> */}
        </div>
        <div>
          <p>From Neuquén, Argentina.</p>
          {/* <p>
            Trying to expand my knowledge about design, product, and learn more about the IA and Web{">"}2.
          </p> */}
          <p>Coding since 2020</p>
          <p>
            Currently working at{" "}
            <a
              href="https://pawer.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pawer
            </a>
            .
          </p>
          <p>Learning more about IA and Web {">"} 2</p>
          <p>
            Analog photography, and a couple of games (EA & Real Life (?)) as a
            hobby.
          </p>
          <p>
            You can see some of my <a href="#projects">projects</a> involving
            Frontend & Backend <a href="#projects">↓</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
