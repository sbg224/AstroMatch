import { Outlet } from "react-router-dom";
import "./App.css";
import "./Components/Header";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
