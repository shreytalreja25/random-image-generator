import React, { useState, useEffect } from 'react';

const ImageDisplay = () => {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://random.imagecdn.app/500/500');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageURL(url);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="image-display">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        imageURL && <img src={imageURL} alt="Random Pic Generator" />
      )}
    </div>
  );
};

export default ImageDisplay;
