import React, { useState, useEffect } from 'react';
import './App.css';
import ImageDisplay from './components/ImageDisplay';
import ShareButton from './components/ShareButton';
import { Helmet } from 'react-helmet';

const App = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://random.imagecdn.app/500/500');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageURL(url);
    } catch (error) {
      console.error('Error fetching random image:', error);
    }
  };

  return (
    <div className="App">
      <Helmet>
        {imageURL && <meta property="og:image" content={imageURL} />}
      </Helmet>

      <ImageDisplay imageURL={imageURL} />
      <ShareButton />
    </div>
  );
};

export default App;
