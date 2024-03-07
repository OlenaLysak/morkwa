import React from 'react';

//Style
import styles from './ContactsStyle.module.css';

//Images
import facebookIcon from '../../assets/facebook-icon.png';
import facebookActiveIcon from '../../assets/facebook-active.png';
import instaIcon from '../../assets/insta-icon.png';
import instaActiveIcon from '../../assets/insta-active.png';
import mailIcon from '../../assets/mail.png';
import mailActiveIcon from '../../assets/mail-active.png';
import telegramIcon from '../../assets/telegram.png';
import telegramActiveIcon from '../../assets/telegram-active.png';

//Components
import HoverImageLink from './HoverImageLink';

//Constants
import {
  instaPageUrl,
  facebookPageUrl,
  mailToUrl,
  telegramUrl,
} from '../../constants/data';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row} style={{ marginBottom: '10px' }}>
        <div className={styles.title}>Follow us:</div>
        <div className={styles.links}>
          <HoverImageLink
            url={facebookPageUrl}
            defaultImage={facebookIcon}
            hoverImage={facebookActiveIcon}
          />
          <HoverImageLink
            url={instaPageUrl}
            defaultImage={instaIcon}
            hoverImage={instaActiveIcon}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Contact us:</div>
        <div className={styles.links}>
          <HoverImageLink
            url={mailToUrl}
            defaultImage={mailIcon}
            hoverImage={mailActiveIcon}
            text={'morkwa.cooperation@gmail.com'}
          />
          <HoverImageLink
            url={telegramUrl}
            defaultImage={telegramIcon}
            hoverImage={telegramActiveIcon}
            text={'@morkwa_tm'}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
