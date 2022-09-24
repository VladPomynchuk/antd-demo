import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { antdTheme } from "./components/styles/themes/antdTheme";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { styledTheme } from "./components/styles/themes/styledTheme";

ConfigProvider.config({
  theme: antdTheme,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={styledTheme}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
