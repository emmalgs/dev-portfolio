import React from 'react';

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email, subject, message,
}) => {
    return (
      <div>
        <h1>Thank you for contacting me!</h1>
        <p>I'll get back to you as soon as possible</p>
        <hr></hr>
        <p>From: {email}</p>
        <p>Subject: {subject}</p>
        <p>Message: {message}</p>
      </div>
    );
  };


