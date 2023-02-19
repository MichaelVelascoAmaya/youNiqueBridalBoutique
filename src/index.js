import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './internationalization/i18n';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import theme from './others/themeApp';
import { RouterProvider } from "react-router-dom";
import { routesDom } from './routes/routesDom';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <SnackbarProvider maxSnack={3}>
          <RouterProvider router={routesDom} />
        </SnackbarProvider>
      </React.StrictMode>
    </I18nextProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
