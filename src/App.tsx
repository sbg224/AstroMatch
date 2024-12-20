import { Outlet } from "react-router-dom";
import "./App.css";
import "./Components/Header";
import Header from "./Components/Header";
import PageTypePlanet from "./pages/PageTypePlanet";
import { NotificationProvider } from "./pages/NotificationProvider";

function App() {
  return (
    <NotificationProvider>
      <Header />
      <Outlet />
    </NotificationProvider>
  );
}

export default App;
