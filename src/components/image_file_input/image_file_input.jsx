import { upload } from '@testing-library/user-event/dist/upload';
import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

function ImageFileInput({ imageUploader, name, onFileChange }) {
  const inputRef = useRef();
  const onButtonClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (e) => {
    console.log(e.target.files[0]);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        ref={inputRef}
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No File'}
      </button>
    </div>
  );
}

export default ImageFileInput;
