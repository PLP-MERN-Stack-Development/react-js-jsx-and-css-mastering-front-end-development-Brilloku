export default function Button({ children, variant = "primary", onClick, className = "", ...rest }) {
  const base = "px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant] || variants.primary} ${className}`} {...rest}>
      {children}
    </button>
  );
}
