import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';

function App({ authService, FileInput, cardRepository }) {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={<Login authService={authService} />}
          />
          <Route exact path="/" element={<Login authService={authService} />} />
          <Route
            path="/home"
            element={
              <Home
                authService={authService}
                FileInput={FileInput}
                cardRepository={cardRepository}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
