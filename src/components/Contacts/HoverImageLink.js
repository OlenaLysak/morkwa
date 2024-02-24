import React, { useState } from 'react';

const HoverImageLink = ({ url, defaultImage, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSrc = isHovered ? hoverImage : defaultImage;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div>
        <img
          src={imageSrc}
          alt="Link"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </a>
  );
};

export default HoverImageLink;
