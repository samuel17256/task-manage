import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask({
      title: "",
      description: "",
      priority: "Low",
      dueDate: "",
    });
    navigate("/");
  };

  return (
    <div className="bg-white p-6 mt-20 max-w-lg mx-auto rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            rows="3"
            placeholder="Enter task details"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
