import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";

function App() {


	return (
		<>
			<Outlet/>
			<Home />
		</>
	);
}

export default App;
