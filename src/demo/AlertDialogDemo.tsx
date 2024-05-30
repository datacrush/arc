import { useState } from "react";

import { AlertDialog, Label } from "../components/alert-dialog";

export function AlertDialogDemo() {
  const [showAlert, setShowAlert] = useState(true);

  const handleSetActive = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <h2>Alert Dialog</h2>

      <button onClick={handleSetActive}>
        {showAlert ? "Hide Alert" : "Show Alert"}
      </button>

      <AlertDialog labelledById="demo-dialog" active={showAlert}>
        <Label>Alert Dialog Demo</Label>
        <div>Demo Alert Dialog!</div>
        <div>
          <button onClick={handleSetActive}>Close</button>
        </div>
      </AlertDialog>
    </div>
  );
}

export default AlertDialogDemo;
