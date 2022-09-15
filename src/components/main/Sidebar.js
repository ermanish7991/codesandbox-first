import React, { useState } from "react";
import { phaseDataOne } from "../../constants/phaseone";
import { phaseDataThree } from "../../constants/phasethree";
import { phaseDataTwo } from "../../constants/phasetwo";
import "../../styles/sidebar.css";
import Card from "../shared/Card";

const Sidebar = ({ setSidebarOpen }) => {
  const [showSidebarPhase, setShowSidebarPhase] = useState(1);

  const handleBackBtn = () => {
    if (showSidebarPhase > 1) {
      setShowSidebarPhase(showSidebarPhase - 1);
    }
  };

  return (
    <div className="sidebarWrapper">
      <div className="sidebar">
        <div className="backAndCancel">
          <p className="backButton" onClick={() => handleBackBtn()}>
            Back
          </p>
          <p className="backButton" onClick={() => setSidebarOpen(false)}>
            Close
          </p>
        </div>
        <div style={{ height: "80%", display: "grid" }}>
          {showSidebarPhase === 1 &&
            phaseDataOne.map((item) => {
              return (
                <Card
                  sidebarPhase={2}
                  setShowSidebarPhase={setShowSidebarPhase}
                  key={item.key}
                  heading={item.heading}
                  description={item.description}
                />
              );
            })}
          {showSidebarPhase === 2 &&
            phaseDataTwo.map((item) => {
              return (
                <Card
                  sidebarPhase={3}
                  setShowSidebarPhase={setShowSidebarPhase}
                  key={item.key}
                  heading={item.heading}
                  description={item.description}
                />
              );
            })}

          {showSidebarPhase === 3 &&
            phaseDataThree.map((item) => {
              return (
                <Card
                  sidebarPhase={4}
                  setShowSidebarPhase={setShowSidebarPhase}
                  key={item.key}
                  heading={item.heading}
                  description={item.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
