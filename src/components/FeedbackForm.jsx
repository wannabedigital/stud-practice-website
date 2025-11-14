import styles from '@styles/feedbackForm.module.css';

const FeedbackForm = () => {
  return (
    <form className={styles.feedbackForm} method="post">
      <div className={styles.fieldContainer}>
        <input
          name="name"
          className={styles.inputField}
          type="text"
          placeholder="Ваше имя*"
          required
        />
      </div>
      <div className={styles.fieldContainer}>
        <input
          name="phoneNumber"
          className={styles.inputField}
          type="tel"
          placeholder="Ваш номер телефона*"
          required
        />
      </div>
      <div className={styles.fieldContainer}>
        <textarea
          name="message"
          className={`${styles.inputField} ${styles.inputMessage}`}
          placeholder="Ваше обращение*"
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <input
          className={styles.submitButton}
          type="submit"
          value={'Отправить'}
        />
      </div>
    </form>
  );
};

export default FeedbackForm;
