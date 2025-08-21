import { Outlet, NavLink } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <ScrollToTop />
      <Header />
      <main className="max-w-6xl mx-auto px-4 md:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
