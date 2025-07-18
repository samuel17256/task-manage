import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ tasks: propTasks }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTasks = propTasks.filter(
      (pt) => !storedTasks.some((st) => st.id === pt.id)
    );
    const added = [...storedTasks, ...newTasks];
    setTasks(added);
  }, [propTasks]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const editTask = (index) => {
    const updated = [...tasks];
    const current = updated[index];

    const newTitle = prompt("Edit Title:", current.title) || current.title;
    const newDesc =
      prompt("Edit Description:", current.description) || current.description;
    const newPriority =
      prompt("Edit Priority (Low, Medium, High):", current.priority) ||
      current.priority;
    const newDueDate =
      prompt("Edit Due Date (YYYY-MM-DD):", current.dueDate) || current.dueDate;

    updated[index] = {
      ...current,
      title: newTitle,
      description: newDesc,
      priority: newPriority,
      dueDate: newDueDate,
    };
    setTasks(updated);
  };

  const pendingTasks = tasks.filter((t) => !t.done);
  const completedTasks = tasks.filter((t) => t.done);
  const totalTasks = tasks.length;
  const pendingCount = pendingTasks.length;
  const completedCount = completedTasks.length;

  const renderTask = (task, index) => (
    <div
      key={index}
      className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4"
    >
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={task.done || false}
            onChange={() => toggleDone(index)}
            className="accent-blue-600"
          />
          <h3
            className={`text-base font-semibold break-words ${
              task.done ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>
        </div>

        {task.description && (
          <p
            className={`text-sm break-words ${
              task.done ? "line-through text-gray-400" : "text-gray-600"
            }`}
          >
            {task.description}
          </p>
        )}

        <p className="text-sm">
          <span className="font-medium">Priority:</span>{" "}
          <span
            className={
              task.priority === "High"
                ? "text-red-600"
                : task.priority === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }
          >
            {task.priority}
          </span>
        </p>

        <p className="text-sm">
          <span className="font-medium">Due:</span>{" "}
          {task.dueDate || "No due date"}
        </p>
      </div>

      <div className="space-x-2 flex-shrink-0 mt-2 md:mt-0">
        <button
          onClick={() => editTask(index)}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(index)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 mt-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-sm font-medium text-gray-500">Total Tasks</h3>
          <p className="text-2xl font-bold text-gray-700">{totalTasks}</p>
        </div>
        <div className="bg-yellow-50 shadow rounded p-4">
          <h3 className="text-sm font-medium text-yellow-700">Pending</h3>
          <p className="text-2xl font-bold text-yellow-700">{pendingCount}</p>
        </div>
        <div className="bg-green-50 shadow rounded p-4">
          <h3 className="text-sm font-medium text-blue-700">Completed</h3>
          <p className="text-2xl font-bold text-blue-700">{completedCount}</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
        <h1 className="font-bold text-xl text-gray-800">Today's Tasks</h1>
        <button
          onClick={() => navigate("/add-task")}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full sm:w-auto"
        >
          + Add Task
        </button>
      </div>

      <div className="mt-6 space-y-10">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Pending Tasks
          </h2>
          {pendingTasks.length === 0 ? (
            <p className="text-gray-500">No pending tasks.</p>
          ) : (
            pendingTasks.map((task) => renderTask(task, tasks.indexOf(task)))
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-2">
            Completed Tasks
          </h2>
          {completedTasks.length === 0 ? (
            <p className="text-gray-400">No completed tasks.</p>
          ) : (
            completedTasks.map((task) => renderTask(task, tasks.indexOf(task)))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddTask;
