import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Signup } from "./components/signup/Signup";
import { HorizontalStepper } from "./components/stepper/HorizontalStepper";
import { Success } from "./components/success/Success";
import { WorkspaceSetup } from "./components/workspace-setup/WorkspaceSetup";
import { Workspace } from "./components/workspace/Workspace";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HorizontalStepper />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/workspacesetup" element={<WorkspaceSetup />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
