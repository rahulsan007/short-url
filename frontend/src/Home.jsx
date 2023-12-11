import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function Home() {
  return (
    <div className="bg-lightGrey/95 h-screen">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}

export default Home;
