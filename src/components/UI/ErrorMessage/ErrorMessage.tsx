import React from 'react';

interface Props {
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<Props> = ({ message, className }) => {
  return (
    <h1 className={`position-absolute top-50 start-50 translate-middle ${className}`}>
      {message}
    </h1>
  );
};

export default ErrorMessage;