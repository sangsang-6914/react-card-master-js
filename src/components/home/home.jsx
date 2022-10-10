import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './home.module.css';

function Home({ authService, FileInput }) {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Woo',
      company: 'Samsung',
      title: 'Softwoare Engineer',
      email: 'woo@gmail.com',
      message: 'go for it',
      theme: 'dark',
      fileName: null,
      fileUrl: null,
    },
    2: {
      id: '2',
      name: 'Sang',
      company: 'Samsung',
      title: 'Softwoare Engineer',
      email: 'sang@gmail.com',
      message: 'go for it',
      theme: 'light',
      fileName: null,
      fileUrl: null,
    },
    3: {
      id: '3',
      name: 'Hun',
      company: 'Samsung',
      title: 'Softwoare Engineer',
      email: 'hun@gmail.com',
      message: 'go for it',
      theme: 'colorful',
      fileName: null,
      fileUrl: null,
    },
  });
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) navigate('/');
    });
  });

  const createOrupdateCard = (card) => {
    console.log(card);
    const updated = { ...cards };
    updated[card.id] = card;
    setCards(updated);
  };

  const deleteCard = (card) => {
    const deleted = { ...cards };
    delete deleted[card.id];
    setCards(deleted);
  };

  return (
    <>
      <section className={styles.home}>
        <Header onLogout={onLogout} />
        <section className={styles.homeContent}>
          <Editor
            FileInput={FileInput}
            cards={cards}
            addCard={createOrupdateCard}
            updateCard={createOrupdateCard}
            deleteCard={deleteCard}
          />
          <Preview cards={cards} />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
