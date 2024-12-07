import "./App.css";

import { AlertDemo, AlertDialogDemo, MeterDemo, TabsDemo } from "./demo";

function App() {
  return (
    <main className="app-root">
      <h1>ARIA Ready Components (ARC)</h1>

      <AlertDemo />

      <AlertDialogDemo />

      <MeterDemo />

      <TabsDemo />
    </main>
  );
}

export default App;
