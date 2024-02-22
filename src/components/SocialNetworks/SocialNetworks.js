import React from 'react';

//Style
import styles from './SocialNetworksStyle.module.css';

//Images
import facebookIcon from '../../assets/facebook-icon.png';
import facebookActiveIcon from '../../assets/facebook-active.png';
import instaIcon from '../../assets/insta-icon.png';
import instaActiveIcon from '../../assets/insta-active.png';

//Components
import HoverImageLink from './HoverImageLink';

import { instaPageUrl, facebookPageUrl } from '../../constants/data';

const SocialNetworks = () => {
  return (
    <div className={styles.container}>
      <div>Follow us</div>
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
  );
};

export default SocialNetworks;
