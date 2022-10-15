import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './home.module.css';

function Home({ authService, FileInput, cardRepository }) {
  const historyState = useLocation().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) return;
    const stopSync = cardRepository.syncCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [authService, navigate]);

  const createOrupdateCard = (card) => {
    console.log(card);
    const updated = { ...cards };
    updated[card.id] = card;
    setCards(updated);
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    const deleted = { ...cards };
    delete deleted[card.id];
    setCards(deleted);
    cardRepository.removeCard(userId, card);
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
