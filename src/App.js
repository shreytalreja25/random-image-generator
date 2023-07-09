import React, { useState } from 'react';
import ImageDisplay from './components/ImageDisplay';
import ShareButton from './components/ShareButton';

const App = () => {
  const [imageURL, setImageURL] = useState('');

  const handleImageLoad = (url) => {
    setImageURL(url);
    updateMetaTag(url);
  };

  const updateMetaTag = (url) => {
    const metaTag = document.querySelector('meta[property="og:image"]');
    if (metaTag) {
      metaTag.content = url;
    }
  };

  return (
    <div className="App">
      <ImageDisplay onLoad={handleImageLoad} />
      {imageURL && <ShareButton imageURL={imageURL} />}
    </div>
  );
};

export default App;
