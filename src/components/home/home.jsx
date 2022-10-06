import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './home.module.css';

function Home({ authService }) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
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
        <section className={styles.homeContent}>Home</section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
