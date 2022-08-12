import styles from "../styles/Contact.module.scss";
const Contact = () => {
  return (
    <section className={styles.contact_container}>
      <h1>Contact</h1>
      <form className={styles.form_class}>
        <div className={styles.email_container}>
          <label>your email</label>
          <input type="text" maxLength={100}/>
        </div>
        <div className={styles.message_container}>
          <label>message</label>
          <textarea maxLength={1000}/>
        </div>
        <div className={styles.button_container}>
          <div>Send</div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
