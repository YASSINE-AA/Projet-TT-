import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Gestion from "./Pages/Gestion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/gestion-des-employes" element={<Gestion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
