import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ImageDisplay from './components/ImageDisplay';
import ShareButton from './components/ShareButton';
import './App.css';

const App = () => {
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
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="App">
      <Helmet>
        <meta name="image" content={imageURL} />
      </Helmet>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ImageDisplay imageURL={imageURL} />
          <ShareButton imageURL={imageURL} />
        </div>
      )}
    </div>
  );
};

export default App;
