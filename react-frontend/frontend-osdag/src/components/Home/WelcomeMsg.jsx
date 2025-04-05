import React from "react";
import { useHome } from "./HomeContext";
import "../../styles/Home.css";

const WelcomeMsg = () => {
  const { darkMode } = useHome();
  
  return (
    <div className={`welcomeMsg ${darkMode ? "darkMode" : ""}`}>
      <h1>Welcome to OS-DAG</h1>
      <p>
        OS-DAG is a platform for designing and analyzing structural connections.
        Get started by selecting a connection type from the sidebar.
      </p>
    </div>
  );
};

export default WelcomeMsg;