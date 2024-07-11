import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
