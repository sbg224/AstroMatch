import { Outlet } from "react-router-dom";
import "./App.css";
import "./Components/Header";
import Header from "./Components/Header";
import PageTypePlanet from "./pages/PageTypePlanet";
import { NotificationProvider } from "./pages/NotificationProvider";

function App() {
<<<<<<< HEAD
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
=======
  return (
    <NotificationProvider>
      <Header />
      <Outlet />
    </NotificationProvider>
  );
>>>>>>> dev
}

export default App;
