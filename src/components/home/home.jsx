import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './home.module.css';

function Home({ authService }) {
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
          <Editor />
          <Preview />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
