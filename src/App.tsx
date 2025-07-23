import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/home";
import ThemeProvider from "./components/theme.provider";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
