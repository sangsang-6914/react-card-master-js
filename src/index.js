import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import AuthSerive from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const root = ReactDOM.createRoot(document.getElementById('root'));

const authService = new AuthSerive();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
root.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>
);
