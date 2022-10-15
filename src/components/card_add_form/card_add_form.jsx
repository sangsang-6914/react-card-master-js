import React, { memo, useRef, useState } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileUrl: null });
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
      fileName: file.fileName || '',
      fileUrl: file.fileUrl || '',
    };
    formRef.current.reset();
    setFile({
      fileName: null,
      fileUrl: null,
    });
    onAdd(card);
  };
  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileUrl: file.url,
    });
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
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
