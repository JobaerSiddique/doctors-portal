import { Routes, Route } from "react-router-dom";
import './App.css';
import Appoinment from "./Pages/Appoinment/Appoinment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Home/Login";
import Register from "./Pages/Home/Register";
import RequireAuth from "./Pages/Home/RequireAuth";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Home/Dashboard";
import Navbar from "./Pages/Shared Page/Navbar";
import MyAppoinment from "./Pages/Home/MyAppoinment";
import MyReview from "./Pages/Home/MyReview";

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appoinment" element={<RequireAuth>
          <Appoinment />
        </RequireAuth>
        } />
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>
        } >
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
      
    
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
