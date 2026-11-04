import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Stuart Mzimba &bull; Built with React &amp; precision. All rights reserved.</p>
      </div>
    </footer>
  );
}
