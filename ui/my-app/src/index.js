import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SafeEnviromment from "./components/feedBack/SafeEnvironment/SafeEnvironment";
import PageTitle from "./components/data-display/PageTitle/PageTitle";

import { ThemeProvider } from "@material-ui/core";
import theme from "themes/theme";
import Header from "./components/surfaces/Header/Header";
import Footer from "components/surfaces/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Header>
        <title>re-inventario</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" />
      </Header>
      <ThemeProvider theme={theme}>
        <SafeEnviromment />
        <PageTitle
          title={"PI Projeto Intregador"}
          subtitle={<h2>re-Inventarios Cadastro de Patrimonios</h2>}
        />
        <App />
        <Footer />
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
