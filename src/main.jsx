//src/main.jsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: "dark",
            fontFamily: "Inter, sans-serif",
            defaultRadius: "lg",
            headings: { fontFamily: "Playfair Display, serif" },
          }}
        >
          <App />
      </MantineProvider>
  </React.StrictMode>
);
