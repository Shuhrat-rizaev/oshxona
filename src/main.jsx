import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import Root from "./pages/girgitton/Root.jsx";
// import { Menu } from "antd";
import Menu from "./pages/girgitton/Menu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="/girgitton" element={<Root />} />
          <Route path="/clints/:id" element={<Menu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
