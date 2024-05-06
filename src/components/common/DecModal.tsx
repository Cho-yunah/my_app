import React from 'react';

interface DecModalProps {
  imageUrl: string;
  description: string;
}

const DecModal: React.FC<DecModalProps> = ({ imageUrl, description }) => {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="Image" />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default DecModal;
