import React from "react";
import "./Home.css";
import Header from "./components/Header";
import RoleButtons from "./components/RoleButtons";
import LoginPrompt from "./components/LoginPrompt";
import FooterMessage from "./components/FooterMessage";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <RoleButtons />
      <LoginPrompt />
      <FooterMessage />
    </div>
  );
};

export default Home;