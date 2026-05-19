import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./componants/App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./componants/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
);
