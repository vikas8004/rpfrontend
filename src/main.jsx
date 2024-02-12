import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const router = createHashRouter([
  {
    path: "/*",
    element: (
      <ChakraProvider>
        <App />
      </ChakraProvider>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
