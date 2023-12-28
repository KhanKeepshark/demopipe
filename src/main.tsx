import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  ExerciseContextProvider,
  UserContextProvider,
} from "./shared/contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserContextProvider>
      <ExerciseContextProvider>
        <App />
      </ExerciseContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
);
