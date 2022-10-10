import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

function CardEditForm({ FileInput, card, updateCard, deleteCard }) {
  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(card);
  };
  const onChange = (e) => {
    const newCard = {
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    updateCard(newCard);
  };
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileUrl: file.url,
    });
  };
  const { id, name, company, title, email, message, theme, fileName, fileUrl } =
    card;
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={card.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
}

export default CardEditForm;
