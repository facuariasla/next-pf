import React from "react";
import styles from "../styles/Social.module.scss";
const { motion } = require("framer-motion");
import { social } from "../data";

export default function Social() {
	return <div className={styles.social_container}>
		{social?.map((el: any) => (
			<a href={el.link} target="_blank" rel="noopener noreferrer" key={el.id} >
				<div className={styles.social} >
					<el.icon className={styles.icons} />
					<p>{el.title}</p>
				</div>
			</a>
		))}
	</div>
}
