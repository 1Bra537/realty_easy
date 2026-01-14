import React from "react";
 import "./Home.css";
import RoleButtons from "./components/RoleButtons";
import LoginPrompt from "./components/LoginPrompt";
import FooterMessage from "./components/FooterMessage";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="home-container">
       <Navbar />
       <RoleButtons />
      <LoginPrompt />
       <FooterMessage />
    </div>
  )
};

export default Home;