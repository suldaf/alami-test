import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePhone } from "../stores";
import "./inputContactStyle.css";
function InputContact(prop) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  function handlePhoneNumberUpdate(text) {
    // eslint-disable-next-line
    const regex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g);
    if (regex.test(text)) {
      setSuccess(true);
      dispatch(changePhone(text));
      setTimeout(() => {
        setPhone("");
        setSuccess(false);
      }, 1500);
    } else {
      setError(true);
      setErrorMsg("Invalid Phone Number");
      setTimeout(() => {
        setError(false);
        setErrorMsg("");
        setPhone("");
      }, 1500);
    }
  }
  return (
    <div className="input-contact-container">
      <label>No Telp</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={error ? "input-error" : success ? "input-success" : ""}
      />
      {error ? <p>*{errorMsg}</p> : null}
      <button onClick={() => handlePhoneNumberUpdate(phone)}>Go</button>
    </div>
  );
}

export default InputContact;
