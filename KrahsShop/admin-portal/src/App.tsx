import React from "react";
import "./App.css";
import { Routes } from "./utils";
import { IntlProvider } from "react-intl";
import messages from "./locales";

function App() {  
  const locale = localStorage.getItem("locale") || "vi-VN";
  return (
    <IntlProvider locale="locale" messages={messages[locale]}>
      <Routes />
    </IntlProvider>
  );
}

export default App;
