const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Page not found.
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go back to Homepage
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
