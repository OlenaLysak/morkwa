import React from 'react';

//Style
import styles from './App.module.css';

//Images
import logo from './assets/logo.png';
import pin from './assets/pin.png';
import facebookIcon from './assets/facebook-icon.png';
import instaIcon from './assets/insta-icon.png';

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
          <div className={styles.test}>Кастомізація під бренд</div>
          <div>мішечки / шопери / набори</div>
          <div>брендування продукції</div>
        </div>
        <div className={styles.announcement}>WEBSITE UNDER CONSTRUCTION</div>
        <div className={styles.socialNetworks}>
          <div>Follow us</div>
          <div>
            <img src={facebookIcon} alt="facebook" />
          </div>
          <div>
            <img src={instaIcon} alt="instagram" />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.pinIcon}>
          <img src={pin} alt="pin" />
        </div>
        <div>м. Львів, вул. Зелена 115д, оф. 521</div>
      </footer>
    </div>
  );
}

export default App;
