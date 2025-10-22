import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
        📝 Task Manager
      </h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow p-2 border rounded-l-md outline-none dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addTask}
          className="px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      <div className="flex justify-center gap-3 mb-4">
        {["all", "active", "completed"].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-md text-sm ${
              filter === f
                ? "bg-blue-500 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded-lg"
          >
            <span
              onClick={() => toggleComplete(task.id)}
              className={`cursor-pointer ${
                task.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
        {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No tasks found.
          </p>
        )}
      </ul>
    </div>
  );
}
