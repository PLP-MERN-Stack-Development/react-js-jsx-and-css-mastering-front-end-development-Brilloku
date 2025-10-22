export default function Card({ children, className = "" }) {
  return <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 transition-shadow hover:shadow-lg ${className}`}>{children}</div>;
}
