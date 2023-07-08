import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButton = ({ imageSrc }) => {
  const shareURL = window.location.href;

  return (
    <div className="share-button">
      <FacebookShareButton url={shareURL}>
        Facebook
      </FacebookShareButton>
      <TwitterShareButton url={shareURL}>
        Twitter
      </TwitterShareButton>
      <WhatsappShareButton url={shareURL}>
        WhatsApp
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButton;
