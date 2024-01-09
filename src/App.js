import { Outlet } from "react-router-dom";
import NavHeader from "./components/NavHeader/NavHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import { FilterContextProvider } from "./context/FilterContext";

const queryClient = new QueryClient();
function App() {
  return (
    <FilterContextProvider>
      <NavHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </FilterContextProvider>
  );
}

export default App;
