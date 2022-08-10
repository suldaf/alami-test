import React from "react";
import ContactComponent from "../components/ContactComponent";
import NavBar from "../components/NavBar";

function Contact(props) {
  return (
    <div>
      <NavBar />
      <ContactComponent />
    </div>
  );
}

export default Contact;
