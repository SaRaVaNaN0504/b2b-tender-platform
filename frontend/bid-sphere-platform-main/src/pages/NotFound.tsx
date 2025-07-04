import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page not found</p>
      <p className="text-gray-600 mb-6">
        The page <code className="bg-gray-200 px-1 rounded">{location.pathname}</code> does not exist.
      </p>
      <Link
        to="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium shadow transition"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
