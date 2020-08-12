import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    error 
      ?
        <div className="error">
          &#9888;{error}&#9888;
        </div>
      :
      <div></div>
  )
}

export default ErrorMessage