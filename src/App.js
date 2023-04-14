import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Newtask from "./components/Nwetask/Newtask";
import TaskName from "./components/TaskName/TaskName";
import Tasks from "./components/Tasks/Tasks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Dashboard />
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Newtask" element={<Newtask/>} />
          <Route path="/TaskName" element={<TaskName/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
