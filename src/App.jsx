import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import AppRouter from "@/routes/Router.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="pt-20">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
