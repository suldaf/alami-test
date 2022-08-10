import React from "react";
import { useSelector } from "react-redux";
import "./contactStyle.css";
function ContactComponent(props) {
  const phone = useSelector((state) => state.data.phone);
  return (
    <div className="contact-container">
      <p>PT.ABC</p>
      <p>Jl Setiabudi no 33</p>
      <p>{phone}</p>
    </div>
  );
}

export default ContactComponent;
