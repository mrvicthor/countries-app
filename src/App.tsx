import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/home";
import ThemeProvider from "./components/theme.provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import CountryDetail from "./components/country-detail";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/country/:id" element={<CountryDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
