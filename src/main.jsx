import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import KyYeu from "./pages/KyYeu/KyYeu.jsx";
import GioiThieu from "./pages/GioiThieu/GioiThieu.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Homepage />,
  },
  {
    path: "/kyyeu",
    element: <KyYeu />,
  },
  {
    path: "/gioithieu",
    element: <GioiThieu />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
