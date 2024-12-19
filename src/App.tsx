import { Outlet } from "react-router-dom";
import "./App.css";
import "./Components/Header"
import Header from "./Components/Header";
import PageTypePlanet from "./pages/PageTypePlanet";

function App() {


	return (
		<>
		<Header />
		<Outlet/>
		</>
	);
}

export default App;
