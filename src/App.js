import React, { useState, useEffect } from 'react';
import ShareButton from './components/ShareButton';
import './App.css'

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
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={imageURL} alt="Random Pic Generator" />
          <ShareButton imageURL={imageURL} />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
