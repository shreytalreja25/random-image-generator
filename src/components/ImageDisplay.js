import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ShareButton from './ShareButton';
import '../App.css';

const ImageDisplay = () => {
  const [imageURL, setImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();

      if (data.status === 'success') {
        setImageURL(data.message);
      }
      setIsLoading(false);

      // Update the og:image meta tag
      Helmet.canUseDOM && Helmet.peek().metaTags.push({
        property: 'og:image',
        content: data.message,
      });
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="App">
      <Helmet>
        <meta property="og:image" content="" />
      </Helmet>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={imageURL} alt="Random Dog Pic" />
          <ShareButton imageURL={imageURL} />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
