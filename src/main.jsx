import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import Root from "./pages/girgitton/Root.jsx";
import Menu from "./pages/girgitton/Menu.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Clients from "./pages/girgitton/Clients.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<App />}>
            <Route path="/girgitton" element={<Root />} />
            <Route path="/clints/:client_id" element={<Menu />} />
            <Route path="/clients" element={<Clients />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
