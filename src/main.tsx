import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Meet from "./pages/Meet.tsx";
import Contact from "./pages/Contact.tsx";
import Profile from "./Components/Profile.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/Meet",
				element: <Meet />,
			},
			{
<<<<<<< HEAD
				path: "/Contact",
				element: <Contact />,
			},
		],
	},
]);
=======
				path:'/Meet/:id',
				element:<Profile/>
			},
			{
				path:'/Contact',
				element: <Contact/>
			}
		]
	}
])









>>>>>>> dev

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
