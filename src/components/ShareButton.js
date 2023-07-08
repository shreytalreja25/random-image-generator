import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import '../App.css'

const ShareButton = ({ imageURL }) => {
  const shareURL = `${window.location.href}?image=${encodeURIComponent(imageURL)}`;

  return (
    <div className="share-button">
      <FacebookShareButton url={shareURL}>
        <button className="facebook-share-button">Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={shareURL}>
        <button className="twitter-share-button">Twitter</button>
      </TwitterShareButton>
      <WhatsappShareButton url={shareURL}>
        <button className="whatsapp-share-button">WhatsApp</button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButton;
