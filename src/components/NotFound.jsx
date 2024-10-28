import React from "react";

function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-lg">Sahifa topilmadi</p>
        <p className="mt-2 text-gray-600">
          Kechirasiz, biz qidirgan sahifamiz mavjud emas.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
}

export default NotFound;
