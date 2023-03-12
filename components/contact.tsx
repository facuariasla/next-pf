import { useState } from "react";
import styles from "../styles/Contact.module.scss";
import Social from "./social";
import Router from "next/router"
import Spinner from "./spinner";
const Contact = () => {
  const [userData, setUserData] = useState<any>();
  const [mailError, setMailError] = useState<boolean>(false);
  const [mailMessage, setMailMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const handleForm = async (e: any) => {
    e.preventDefault();
    console.log(userData);
    setMailError(false);
    setLoading(true);
    // setMailMessage('Sending message...');
    const response = await fetch('/api/email', {
      method: "POST",
      body: JSON.stringify({ userData }),
      headers: {
        "Content-Type": "application/json",
      },
    },)
    const data = await response.json();
    if (data.status !== 'ok') {
      setMailError(true);
      setMailMessage('Something went wrong, try again later (or check social 👆)');
    } else {
      setMailError(false);
      setMailMessage('Message sent successfully');
    }
    setLoading(false);
    console.log(mailMessage);
  };

  return (
    <section className={styles.contact_container} id="contact">
      <h1>Contact</h1>
      <Social />
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

        {/* <div className={styles.button_container}>
          <button type='submit'>send</button>
        </div> */}
        <div className={styles.button_container}>
          {loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner />
          </div> : <button type='submit'>send</button>}
        </div>
        <div className={styles.message_container}>
          {
            mailError ? <p className={styles.failed}>{mailMessage}</p>
              : <p className={styles.success}>{mailMessage}</p>
          }
        </div>

      </form>
    </section>
  );
};

export default Contact;
