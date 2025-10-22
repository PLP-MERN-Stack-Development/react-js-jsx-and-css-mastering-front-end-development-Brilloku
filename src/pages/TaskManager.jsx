import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Card from "../components/Card";
import Button from "../components/Button";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // Load tasks from localStorage on mount
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text: text.trim(), done: false };
    setTasks(t => [...t, newTask]);
    setText("");
  };

  const toggle = id => setTasks(t => t.map(x => x.id === id ? { ...x, done: !x.done } : x));
  const remove = id => setTasks(t => t.filter(x => x.id !== id));

  const filtered = tasks.filter(t => {
    if (filter === "active") return !t.done;
    if (filter === "completed") return t.done;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Task Manager</h1>
            <p className="text-gray-600 dark:text-gray-300">Organize your tasks efficiently</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Add New Task
                </h2>
                <form onSubmit={addTask} className="flex gap-3 mb-6">
                  <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="flex-1 p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <Button className="px-6 py-3">Add Task</Button>
                </form>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['all','active','completed'].map(f => (
                    <Button
                      key={f}
                      variant={filter === f ? 'primary' : 'secondary'}
                      onClick={() => setFilter(f)}
                      className="capitalize"
                    >
                      {f}
                    </Button>
                  ))}
                </div>

                <div className="space-y-3">
                  {filtered.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      No tasks found
                    </div>
                  ) : (
                    filtered.map(t => (
                      <div key={t.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={t.done}
                            onChange={() => toggle(t.id)}
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <span className={`text-lg ${t.done ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                            {t.text}
                          </span>
                        </div>
                        <Button variant="danger" onClick={() => remove(t.id)} className="px-3 py-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            </div>

            <div>
              <Card>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Statistics
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{tasks.length}</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Total Tasks</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{tasks.filter(t => t.done).length}</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Completed</div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{tasks.filter(t => !t.done).length}</div>
                    <div className="text-sm text-yellow-600 dark:text-yellow-400">Active</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
