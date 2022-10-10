import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

function CardAddForm({ onAdd }) {
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input className={styles.input} type="text" name="name" ref={nameRef} />
      <input
        className={styles.input}
        type="text"
        name="company"
        ref={companyRef}
      />
      <select className={styles.select} ref={themeRef} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" ref={titleRef} />
      <input className={styles.input} type="text" name="email" ref={emailRef} />
      <textarea className={styles.textarea} name="message" ref={messageRef} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
}

export default CardAddForm;
