import { useState } from "react";
import "./styles.css";
import Sidebar from "./components/main/Sidebar";
import Button from "./components/shared/Button";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log(sidebarOpen);
  return (
    <div style={{ height: "100vh" }}>
      <Button sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
    </div>
  );
}
