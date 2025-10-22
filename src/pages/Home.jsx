export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to My React App
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern, responsive application demonstrating React best practices with component architecture,
            state management, and API integration using Tailwind CSS.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-t-blue-500 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Task Manager</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Manage your tasks with add, complete, delete, and filter functionality.
              All data is persisted in local storage for a seamless experience.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-t-green-500 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">API Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fetch and display data from JSONPlaceholder API with real-time search
              and pagination. Includes loading states and error handling.
            </p>
          </div>

          <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border-t-4 border-t-purple-500 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Responsive Design</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Fully responsive layout that adapts beautifully to mobile, tablet,
              and desktop devices with dark mode support.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg">
            <span className="text-gray-600 dark:text-gray-300">Built with</span>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-medium">Tailwind</span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">Vite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
