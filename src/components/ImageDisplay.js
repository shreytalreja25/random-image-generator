import React from 'react';

const ImageDisplay = ({ imageURL }) => {
  return (
    <div className="image-display">
      {imageURL ? (
        <img src={imageURL} alt="Random Dog Img" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ImageDisplay;
