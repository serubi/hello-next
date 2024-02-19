import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Hello, is this thing on?</footer>
      </body>
    </html>
  );
}

export default RootLayout;
