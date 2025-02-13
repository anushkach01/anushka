import React from 'react';
import QRCode from 'react-qr-code';
import SecretMessage from './SecretMessage'

const SecretMessageQRCode = () => {
  const secretMessage = SecretMessage();

  return (
    <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Happy Valentine's day baby 🤍 </h1>
      <QRCode value={secretMessage} size={260} />
      <p style={{ marginTop: '20px' }}>
        Scan the QR code to reveal the secret message!
      </p>
    </div>
  );
};

export default SecretMessageQRCode;