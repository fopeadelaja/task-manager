import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BoardProvider } from "./context/BoardContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <BoardProvider>
        <App />
      </BoardProvider>
    </Provider>
  </StrictMode>,
);
