import { useState } from "react";

import Alert from "../components/alert/Alert";

export function AlertDemo() {
  const [showAlert, setShowAlert] = useState(false);

  const handleToggleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <h2>Alert</h2>

      <button onClick={handleToggleAlert}>
        {showAlert ? "Hide Alert" : "Show Alert"}
      </button>

      <Alert id="demo-alert" active={showAlert}>
        <div>Demo Alert!</div>
      </Alert>
    </div>
  );
}

export default AlertDemo;
