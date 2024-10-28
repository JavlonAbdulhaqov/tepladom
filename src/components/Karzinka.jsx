import React from "react";
import { TiDelete } from "react-icons/ti";

function Karzinka({ karzinka, addToKarzinka, setKarzinka }) {
  const onDelete = (id) => {
    setKarzinka(karzinka.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl text-center mb-6">Karzinka</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {karzinka.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <TiDelete
                onClick={() => onDelete(item.id)}
                className=" delete text-4xl  border-none"
              />
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-contain"
              />

              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-lg text-gray-600">{item.price} сум</p>
                <button
                  onClick={() => addToKarzinka(item)}
                  className="mt-4 w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition-colors"
                >
                  Savatga qo'shish
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Karzinka;
