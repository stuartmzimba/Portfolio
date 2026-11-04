import React from 'react';

export default function Toast({ message, visible }) {
  return (
    <div className={`portfolio-toast ${visible ? 'show' : ''}`} role="alert" aria-live="polite">
      <i className="bx bx-check-circle" />
      <span>{message}</span>
    </div>
  );
}
