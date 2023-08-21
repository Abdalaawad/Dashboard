import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Tabledata from "../../component/tabledata/Tabledata";
import "./Lists.css";
const Lists = () => {
  return (
    <div className="app-lists-page">
      <Sidebar />
      <div className="app-lists-app-navbar">
        <Navbar />
        <div className="app-lists-app-tabledata">
          <Tabledata />
        </div>
      </div>
    </div>
  );
};

export default Lists;
