import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  ExerciseContextProvider,
  UserContextProvider,
} from "./shared/contexts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <ExerciseContextProvider>
          <App />
        </ExerciseContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);
