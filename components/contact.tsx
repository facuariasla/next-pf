import { useState } from "react";
// import { sendMail } from "../lib/sendgrid";
import styles from "../styles/Contact.module.scss";
import Social from "./social";
const Contact = () => {
  const [userData, setUserData] = useState<any>();

  const handleForm = async (e:any) => {
    e.preventDefault();
    console.log(userData);
    // const sending = await sendMail({
    //   to: 'facundolautaroarias@hotmail.com',
    //   from: userData.email,
    //   subject: "Portfolio Message - facuariasla",
    //   html: userData.message,
    // });
    // console.log(sending)
  };

  return (
    <section className={styles.contact_container} id="contact">
      <h1>Contact</h1>
      <Social/>
      <form className={styles.form_class} onSubmit={handleForm} autoComplete='off'>
        <div className={styles.email_container}>
          <label htmlFor="email">your email</label>
          <input
          disabled
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
          disabled
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
          <button type='submit' disabled>send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
