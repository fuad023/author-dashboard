import React from "react";

export default function Sidebar({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`}>
      <div className="brand">{sidebarOpen ? "Author Dashboard" : "AD"}</div>
      <button className="toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "⟨⟨" : "⟩⟩"}
      </button>
      <ul className="nav">
        <li
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => setActiveTab("profile")}
        >
          <span className="icon">👤</span>{" "}
          <span className="label">Profile</span>
        </li>
        <li
          className={activeTab === "articles" ? "active" : ""}
          onClick={() => setActiveTab("articles")}
        >
          <span className="icon">📝</span>{" "}
          <span className="label">My Articles</span>
        </li>
      </ul>
    </aside>
  );
}
