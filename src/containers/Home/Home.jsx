import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStoreContext } from "../../util/Context/StoreContext";
import MonitorBar from "../../components/MonitorBar/MonitorBar";

import "./Home.css";

export default function Home() {
  const store = useStoreContext();
  console.log(store);
  const navigate = useNavigate();
  const [urlDetails, setUrlDetails] = useState({
    url: "",
    feq: 10,
  });

  const handleSubmit = () => {
    const valid = isValidHttpUrl(urlDetails.url);
    if (!valid) {
      alert("Invalid Url, Enter again");
      setUrlDetails((prev) => {
        return {
          ...prev,
          url: "",
        };
      });
      return;
    }
    store.currentUrl = {
      url: urlDetails.url,
      feq: urlDetails.feq,
    };

    console.log(urlDetails);
    navigate("/login");
  };

  function isValidHttpUrl(string) {
    try {
      new URL(string);
    } catch (e) {
      return false;
    }

    return true;
  }
  return (
    <div className="home-page">
      <div className="wrapper">
        <div className="home-container">
          <h2 className="home-container__title">Enter URL to monitor</h2>
          <MonitorBar urlDetails={urlDetails} setUrlDetails={setUrlDetails} />
          <button className="home-container__submit-btn" onClick={handleSubmit}>
            Start Monitoring
          </button>
        </div>
      </div>
    </div>
  );
}
