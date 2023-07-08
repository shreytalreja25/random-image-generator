import React, { useState } from 'react';

const ShareButton = ({ imageSrc }) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const handleShareClick = (platform) => {
    let shareURL = '';

    // Set the share URL based on the selected platform
    switch (platform) {
      case 'facebook':
        shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`;
        break;
      case 'twitter':
        shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          window.location.href
        )}`;
        break;
      case 'whatsapp':
        shareURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          window.location.href
        )}`;
        break;
      default:
        break;
    }

    // Open the share URL in a new tab
    if (shareURL) {
      window.open(shareURL, '_blank');
    }
  };

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div className="share-button">
      <button onClick={toggleListVisibility}>Share</button>
      {isListVisible && (
        <ul className="share-options">
          <li>
            <a href="#" onClick={() => handleShareClick('facebook')}>
              Facebook
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleShareClick('twitter')}>
              Twitter
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleShareClick('whatsapp')}>
              WhatsApp
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ShareButton;
