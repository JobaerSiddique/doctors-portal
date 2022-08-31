import { Routes, Route } from "react-router-dom";
import './App.css';
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Home/Login";
import Register from "./Pages/Home/Register";
import RequireAuth from "./Pages/Home/RequireAuth";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appoinment" element={<RequireAuth>
          <Appoinment />
        </RequireAuth>
        } />
        <Route path="/register" element={<Register />} />
      
    
      </Routes>
    </div>
  );
}

export default App;
