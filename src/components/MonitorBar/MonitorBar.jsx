import React, { useState } from "react";

import "./MonitorBar.css";

const feqMap = {
  10: "10 secs",
  60: "1 min",
  300: "5 mins",
  600: "10 mins",
  900: "15 mins",
  3600: "1 hr",
  14400: "4 hrs",
  21600: "6 hrs",
  86400: "Daily",
};

export default function MonitorBar(props) {
  const { urlDetails, setUrlDetails } = props;
  const [dropDown, setDropDown] = useState(false);

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setUrlDetails((prevDetails) => {
      return {
        ...prevDetails,
        url: url,
      };
    });
  };

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleDropDownValue = (e) => {
    const data = e.target.dataset;
    const feqValue = Number(data.feqvalue);
    setUrlDetails((prevDetails) => {
      return {
        ...prevDetails,
        feq: feqValue,
      };
    });
  };

  return (
    <div className="monitor-bar">
      <form className="monitor-bar__form">
        <div className="monitor-bar__form-url">
          <input
            type="url"
            value={urlDetails.url}
            onChange={handleUrlChange}
            name="monitorUrl"
            placeholder="Enter url"
            className="monitor-bar__form-url-input"
          />
        </div>
        <div className="monitor-bar__form-feq" onClick={toggleDropDown}>
          {/* default Value */}
          <span className="monitor-bar__form-feq-option-default">
            {feqMap[urlDetails.feq]}
          </span>
          {/* options */}
          {dropDown && (
            <div className="monitor-bar__form-feq__drop-down">
              <span
                onClick={handleDropDownValue}
                data-feqvalue="10"
                className="monitor-bar__form-feq-option"
              >
                10 secs
              </span>
              <span
                onClick={handleDropDownValue}
                data-feqvalue="60"
                className="monitor-bar__form-feq-option"
              >
                1 min
              </span>
              <span
                onClick={handleDropDownValue}
                data-feqvalue="300"
                className="monitor-bar__form-feq-option"
              >
                5 mins
              </span>
              <span
                onClick={handleDropDownValue}
                data-feqvalue="600"
                className="monitor-bar__form-feq-option"
              >
                10 mins
              </span>
              <span
                onClick={handleDropDownValue}
                data-feqvalue="900"
                className="monitor-bar__form-feq-option"
              >
                15 mins
              </span>
              <span
                onClick={handleDropDownValue}
                data-feq="1 hr"
                data-feqvalue="3600"
                className="monitor-bar__form-feq-option"
              >
                1 hr
              </span>
              <span
                onClick={handleDropDownValue}
                data-feqvalue="14400"
                className="monitor-bar__form-feq-option"
              >
                4 hrs
              </span>
              <span
                onClick={handleDropDownValue}
                data-feqvalue="21600"
                className="monitor-bar__form-feq-option"
              >
                6 hrs
              </span>
              <span
                onClick={handleDropDownValue}
                data-feqvalue="86400"
                className="monitor-bar__form-feq-option"
              >
                Daily
              </span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
