import React, { useState } from 'react';

//Style
import styles from './FooterStyle.module.css';

//Images
import pin from '../../assets/pin.png';
import pinActive from '../../assets/pin-active.png';

//Constants
import { locationUrl } from '../../constants/data';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSrc = isHovered ? pinActive : pin;

  return (
    <footer className={styles.footer}>
      <a
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.pinIcon}>
          <img src={imageSrc} alt="pin" />
        </div>
        <div style={{ color: isHovered ? '#026C6A' : '#fef9f6' }}>
          м. Львів, вул. Зелена 115б, оф. 521
        </div>
      </a>
    </footer>
  );
};

export default Footer;
