import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './home.module.css';

function Home({ authService }) {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Woo',
      company: 'Samsung',
      title: 'Softwoare Engineer',
      email: 'woo@gmail.com',
      message: 'go for it',
      theme: 'dark',
      fileName: 'woo',
      fileUrl: null
    },
    {
      id: '2',
      name: 'Sang',
      company: 'Samsung',
      title: 'Softwoare Engineer',
      email: 'sang@gmail.com',
      message: 'go for it',
      theme: 'light',
      fileName: 'sang',
      fileUrl: null
    },
    {
      id: '3',
      name: 'Hun',
      company: 'Samsung',
      title: 'Softwoare Engineer',
      email: 'hun@gmail.com',
      message: 'go for it',
      theme: 'colorful',
      fileName: 'hun',
      fileUrl: null
    }
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) navigate('/');
    });
  });
  return (
    <>
      <section className={styles.home}>
        <Header onLogout={onLogout} />
        <section className={styles.homeContent}>
          <Editor cards={cards} />
          <Preview cards={cards} />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
