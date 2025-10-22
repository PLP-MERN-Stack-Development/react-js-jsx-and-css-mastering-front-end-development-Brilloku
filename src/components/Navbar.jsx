import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-200 dark:bg-gray-800 shadow-md">
      <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
        My React App
      </Link>
      <div className="flex gap-4 items-center">
        <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" to="/">Home</Link>
        <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" to="/tasks">Tasks</Link>
        <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" to="/api">API</Link>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
