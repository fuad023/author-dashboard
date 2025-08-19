import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("articles");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="dash">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <main className="main">
        {activeTab === "profile" ? <Profile /> : <Articles />}
      </main>
    </div>
  );
}
