// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/home";
import ThemeProvider from "./components/theme.provider";
const queryClient = new QueryClient();

function App() {
  // const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
