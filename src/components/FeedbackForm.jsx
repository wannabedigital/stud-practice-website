'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PAGES } from '@config/pages.config';
import styles from '@styles/feedbackForm.module.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    const phoneDigits = phone.replace(/\D/g, '');

    if (!/^(7|8)\d{10}$/.test(phoneDigits)) {
      setStatus('Введите корректный номер телефона!');
      return;
    }

    setStatus('Отправка...');

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone: phone, message }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus('Заявка успешно отправлена!');
      setName('');
      setPhone('');
      setMessage('');
    } else {
      setStatus('Ошибка: ' + data.error);
    }
  };

  return (
    <form className={styles.feedbackForm} method="post" onSubmit={handleSubmit}>
      <div className={styles.fieldContainer}>
        <input
          name="name"
          className={styles.inputField}
          type="text"
          placeholder="Ваше имя*"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div className={styles.fieldContainer}>
        <input
          name="phone"
          className={styles.inputField}
          type="tel"
          placeholder="Ваш номер телефона*"
          required
          value={phone}
          onChange={e => setPhone(e.target.value)}
          autoComplete="tel"
        />
      </div>
      <div className={styles.fieldContainer}>
        <textarea
          name="message"
          className={`${styles.inputField} ${styles.inputMessage}`}
          placeholder="Ваше обращение"
          value={message}
          onChange={e => setMessage(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className={styles.privacyAgreement}>
        <label className={styles.checkboxLabel}>
          <input className={styles.checkboxInput} type="checkbox" required />
          <span className={styles.customCheckbox}></span>
          <div className={styles.checkboxSpan}>
            Я соглашаюсь с{' '}
            <Link
              className={styles.legalLink}
              href={PAGES.PRIVACY_POLICY.path}
              target="_blank"
              rel="noopener"
            >
              &laquo;Политикой конфиденциальности&raquo;
            </Link>{' '}
            и{' '}
            <Link
              className={styles.legalLink}
              href={PAGES.USER_AGREEMENT.path}
              target="_blank"
              rel="noopener"
            >
              &laquo;Пользовательским соглашением&raquo;
            </Link>
            .
          </div>
        </label>
      </div>

      <div className={styles.buttonStatusFlexbox}>
        <div className={styles.buttonContainer}>
          <input
            className={styles.submitButton}
            type="submit"
            value={'Отправить'}
          />
        </div>
        <div className={styles.statusContainer}>
          {status ? (
            <p className={styles.status}>{status}</p>
          ) : (
            <p className={`${styles.status} ${styles.statusHidden}`}>{''}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
