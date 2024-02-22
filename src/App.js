import React from 'react';

//Style
import styles from './App.module.css';

//Components
import SocialNetworks from './components/SocialNetworks/SocialNetworks';

//Images
import logo from './assets/logo.png';
import pin from './assets/pin.png';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img alt="Morkwa" src={logo} className={styles.logoImg} />
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.subtitle}>COMING SOON</div>
        <div className={styles.products}>
          <div>Кастомізація під бренд</div>
          <div>мішечки / шопери / набори</div>
          <div>брендування продукції</div>
        </div>
        <div className={styles.announcement}>WEBSITE UNDER CONSTRUCTION</div>
        <SocialNetworks />
      </div>
      <footer className={styles.footer}>
        <div className={styles.pinIcon}>
          <img src={pin} alt="pin" />
        </div>
        <div>м. Львів, вул. Зелена 115б, оф. 521</div>
      </footer>
    </div>
  );
}

export default App;
