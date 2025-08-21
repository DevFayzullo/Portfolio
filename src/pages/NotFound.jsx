import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-lg">Page not found.</p>
      <Link
        to="/"
        className="mt-6 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Go Home
      </Link>
    </div>
  );
}
