import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ExtensionsProvider from "./providers/ExtensionsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExtensionsProvider>
      <App />
    </ExtensionsProvider>
  </StrictMode>,
);
