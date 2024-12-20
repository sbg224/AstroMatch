import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./pages/SideBar";
import Header from "./Components/Header";
import { NotificationProvider } from "./pages/NotificationProvider";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NotificationProvider>
      <div className="app">
        <Header />
        <button className="open-sidebar-button" onClick={toggleSidebar}>
          ☰ Messagerie
        </button>
        {isSidebarOpen && (
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
        <Outlet />
      </div>
    </NotificationProvider>
  );
}

export default App;
