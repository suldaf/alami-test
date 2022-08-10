import React from "react";
import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import InputContact from "../components/InputContact";
import NavBar from "../components/NavBar";

function Home(props) {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>This Is Homepage</h1>
      <div>
        <AboutComponent />
      </div>
      <div className="contact">
        <InputContact />
        <ContactComponent />
      </div>
    </div>
  );
}

export default Home;
