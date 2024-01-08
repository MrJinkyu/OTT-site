import { Outlet } from "react-router-dom";
import NavHeader from "./components/NavHeader/NavHeader";

function App() {
  return (
    <>
      <NavHeader />
      <Outlet />
    </>
  );
}

export default App;
