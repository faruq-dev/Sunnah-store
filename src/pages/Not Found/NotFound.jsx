const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center px-6">
        <h1 className="text-9xl font-extrabold text-[#43A047] animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8">
          <button
            className="px-6 py-3 bg-[#43A047] text-white rounded-lg shadow-md hover:bg-[#388E3C] transition"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
          <a
            href="/"
            className="ml-4 px-6 py-3 border border-[#43A047] text-[#43A047] rounded-lg shadow-md hover:bg-[#43A047] hover:text-white transition"
          >
            Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
