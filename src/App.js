import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Gestion from "./Pages/Gestion";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Redirect root path to /login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/gestion-des-employes" element={<Gestion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
