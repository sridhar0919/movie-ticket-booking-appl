import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark mt-5" style={{ color: 'white' }}>
        <div className="px-5 py-3 text-center">
          <h4>Bookshow</h4>
          <p>Copyright 2022 &#169; All rights reserved</p>
          <p className="text-monospace text-muted" style={{ fontSize: '12px' }}>
            The contents and images used are copyright protected and copyright
            vests with respective owners.
          </p>
          <p>For any queries contact +91 12345 67890</p>
        </div>
      </footer>
    </div>
  );
}
