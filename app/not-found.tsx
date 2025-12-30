import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200">
        <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
        <p className="mb-6 text-center max-w-md">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;
