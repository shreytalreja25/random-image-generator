import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const ShareButton = ({ imageURL }) => {
  const shareURL = `${window.location.href}?image=${encodeURIComponent(imageURL)}`;

  return (
    <div className="share-button">
      <FacebookShareButton url={shareURL} quote="Check out this random image!">
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={shareURL} title="Random Image">
        Share on Twitter
      </TwitterShareButton>
      <WhatsappShareButton url={shareURL} title="Random Image">
        Share on WhatsApp
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButton;
