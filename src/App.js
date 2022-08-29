import { Routes, Route } from "react-router-dom";
import './App.css';
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Home/Login";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appoinment" element={<Appoinment />} />
      
    
      </Routes>
    </div>
  );
}

export default App;
