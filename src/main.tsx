import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ExerciseContextProvider } from "./shared/contexts/exerciseContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ExerciseContextProvider>
      <App />
    </ExerciseContextProvider>
  </BrowserRouter>,
);
