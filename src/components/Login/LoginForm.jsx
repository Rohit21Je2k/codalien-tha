import React, { useState } from "react";

import { monitoring } from "../../util/module/monitoring";
import { useStoreContext } from "../../util/Context/StoreContext";

import "./LoginForm.css";

export default function LoginForm() {
  const store = useStoreContext();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [form, setForm] = useState({
    email: "",
    mobile: "",
  });

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleMobileChange = (e) => {
    const mobile = e.target.value;
    setMobile(mobile);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setForm({
      email,
      mobile,
    });
    setEmail("");
    setMobile("");
    console.log(form);
    const newUrlObj = {
      url: store.currentUrl.url,
      feq: store.currentUrl.feq,
      email: email,
      mobile: mobile,
    };
    store.urls.push(newUrlObj);
    store.currentUrl = {
      url: "",
      feq: "",
    };
    monitoring();
  };
  return (
    <div className="login-page__form-container">
      <h3 className="login-page__title">Enter Your Details</h3>
      <p className="login-page__para">
        Url report will be send to this email or mobile
      </p>
      <form onSubmit={handleFormSubmit} className="login-page__form">
        <label className="login-page__form-label">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          className="login-page__form-input"
          type="email"
          name="email"
          placeholder="Enter Email"
          required
        />
        <label className="login-page__form-label">Phone</label>
        <input
          value={mobile}
          onChange={handleMobileChange}
          className="login-page__form-input"
          type="tel"
          name="mobile"
          placeholder="Enter Mobile"
          required
        />
        <button className="login-page__form-btn">Submit</button>
      </form>
    </div>
  );
}
