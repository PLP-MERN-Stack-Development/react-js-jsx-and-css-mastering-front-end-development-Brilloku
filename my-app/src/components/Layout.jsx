import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-8">{children}</main>
      <Footer />
    </div>
  );
}
