import React from 'react';

const ShareButton = ({ imageSrc }) => {
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

  return (
    <div className="share-button">
      <button onClick={handleShareClick.bind(null, 'facebook')}>Facebook</button>
      <button onClick={handleShareClick.bind(null, 'twitter')}>Twitter</button>
      <button onClick={handleShareClick.bind(null, 'whatsapp')}>WhatsApp</button>
    </div>
  );
};

export default ShareButton;
