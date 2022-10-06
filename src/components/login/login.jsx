import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

function Login({ authService }) {
  const navigate = useNavigate();
  const goToHome = (userId) => {
    console.log(userId);
    navigate('/home', { state: { id: userId } });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToHome(data.user.uid));
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToHome(user.uid);
    });
  });
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default Login;
