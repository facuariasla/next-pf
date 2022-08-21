import { useState } from "react";
import styles from "../styles/Contact.module.scss";
const Contact = () => {
  const [userData, setUserData] = useState<any>();

  const handleForm = () => {
    console.log(userData);
  };

  return (
    <section className={styles.contact_container} id="contact">
      <h1>Contact</h1>
      <form className={styles.form_class} onSubmit={handleForm} autoComplete='off'>
        <div className={styles.email_container}>
          <label htmlFor="email">your email</label>
          <input
            name="email"
            id="email"
            type="email"
            maxLength={100}
            required
            onChange={(e: any) =>
              setUserData({
                ...userData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.message_container}>
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            id="message"
            maxLength={1000}
            required
            onChange={(e: any) =>
              setUserData({
                ...userData,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div className={styles.button_container}>
          <button type='submit'>send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
