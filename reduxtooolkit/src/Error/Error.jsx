import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJYCPN1_ZoQlAq5QScQvm3hgRZSAyRPR2Kg&s"
        alt="Error"
        className="w-64 h-64 object-contain mb-4"
      />
      <h1 className="text-3xl font-semibold text-gray-700">Something went wrong!</h1>
    </div>
  );
};

export default Error;
