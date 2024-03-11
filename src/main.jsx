import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createHashRouter,
  RouterProvider,
  
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import ShowAdmissionModel from "./utils/ShowAdmissionModel.jsx";
// const router = createHashRouter([
//   {
//     path: "/*",
//     element: (
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//     ),
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    
        <ChakraProvider>
          <ShowAdmissionModel/>
          <App />
        </ChakraProvider>
     
    </BrowserRouter>
  </>
);
