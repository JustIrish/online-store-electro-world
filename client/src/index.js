import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'modules/App';
import { theme } from './shared/styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
