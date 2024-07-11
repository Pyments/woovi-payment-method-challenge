import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./routes/ErrorPage.tsx";
import PaymentMethod from "./routes/PaymentMethod.tsx";
import PixCreditCard from "./routes/PixCreditCard.tsx";
import PixQr from "./routes/PixQr.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentMethod />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/credit-card",
    element: <PixCreditCard />,
  },
  {
    path: "/qr",
    element: <PixQr />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#03D69D",
    },
    secondary: {
      main: "#133A6F",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 800,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 800,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 800,
    },
    fontFamily: ["Nunito"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
