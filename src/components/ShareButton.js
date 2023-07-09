import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import '../App.css';

const ShareButton = ({ imageURL }) => {
  const shareURL = `${window.location.href}?image=${encodeURIComponent(imageURL)}`;

  return (
    <div className="share-button">
      <FacebookShareButton url={shareURL} quote="Check out this random image!">
        <button className="facebook-share-button">Share on Facebook</button>
      </FacebookShareButton>
      <TwitterShareButton url={shareURL} title="Random Image">
        <button className="twitter-share-button">Share on Twitter</button>
      </TwitterShareButton>
      <WhatsappShareButton url={shareURL} title="Random Image">
        <button className="whatsapp-share-button">Share on WhatsApp</button>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButton;
