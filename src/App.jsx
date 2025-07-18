import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import SideBar from "./Components/SideBar.jsx";
import Navbar from "./Components/Navbar.jsx";
import AddTaskForm from "./Components/AddTaskForm.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 ml-64">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />}/>
          <Route path="/add-task" element={<AddTaskForm onAddTask={addTask} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
