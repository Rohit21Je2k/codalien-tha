import React from "react";

export default function Verify() {
  return (
    <div className="login-page__verify">
      <h3 className="login-page__title">Verify OTP</h3>
      <form className="login-page__form">
        <label className="login-page__form-label">Enter OTP</label>
        <input
          className="login-page__form-input"
          type="text"
          name="otp"
          placeholder="Enter OTP"
        />
      </form>
    </div>
  );
}
