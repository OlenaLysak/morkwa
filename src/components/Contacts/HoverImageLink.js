import React, { useState } from 'react';

import styles from './HoverImageLink.module.css';

const HoverImageLink = ({ url, defaultImage, hoverImage, text = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSrc = isHovered ? hoverImage : defaultImage;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <div
        className={styles.linkItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageSrc} alt="Link" className={styles.iconGap} />
        <div
          style={{
            color: isHovered ? '#026c6a' : 'inherit',
          }}
        >
          {text}
        </div>
      </div>
    </a>
  );
};

export default HoverImageLink;
