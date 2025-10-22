export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-10">
      <p className="text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} My React App. All rights reserved.
      </p>
      <div className="mt-2 flex justify-center gap-4 text-sm">
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Privacy Policy</a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Terms of Service</a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Contact</a>
      </div>
    </footer>
  );
}
