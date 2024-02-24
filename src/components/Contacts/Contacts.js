import React from 'react';

//Style
import styles from './ContactsStyle.module.css';

//Images
import facebookIcon from '../../assets/facebook-icon.png';
import facebookActiveIcon from '../../assets/facebook-active.png';
import instaIcon from '../../assets/insta-icon.png';
import instaActiveIcon from '../../assets/insta-active.png';

//Components
import HoverImageLink from './HoverImageLink';

import { instaPageUrl, facebookPageUrl } from '../../constants/data';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>Follow us:</div>
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
      <div className={styles.row}>
        <div>Contact us:</div>
        <HoverImageLink />
        <HoverImageLink />
      </div>
    </div>
  );
};

export default Contacts;
