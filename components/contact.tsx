import { useState } from "react";
import styles from "../styles/Contact.module.scss";
import Social from "./social";
import Router from "next/router"
const Contact = () => {
  const [userData, setUserData] = useState<any>();
  const [mailError, setMailError] = useState<boolean>(false);
  const [mailSended, setMailSended] = useState<boolean>(false);

  const [mailMessage, setMailMessage] = useState<string>('');

  const handleForm = async (e:any) => {

    e.preventDefault();
    console.log(userData);
    setMailError(false);
    setMailMessage('');
    const response = await fetch('/api/email', {
      method: "POST",
      body: JSON.stringify({userData}),
      headers: {
        "Content-Type":"application/json",
      },
    },)
    const data = await response.json();
    if(data.status !=='ok'){
      setMailError(true);
      setMailMessage('Algo salio mal, intentalo más tarde (o comunicate via LinkedIn 👀)');
    } else {
      setMailError(false);
      setMailMessage('Mensaje enviado!');
    }
    console.log(mailMessage);
  };

  return (
    <section className={styles.contact_container} id="contact">
      <h1>Contact</h1>
      <Social/>
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
        <div className={styles.message_container}>
          <p className={mailError? styles.failed:''}>{mailMessage}</p>
        </div>
      </form>
    </section>
  );
};

export default Contact;
