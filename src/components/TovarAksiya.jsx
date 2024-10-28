import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TovarAksiya({ addToKarzinka, Context }) {
  const notify = () => toast("✅Sevimlilar ro'yxatiga qo'shildi!");
  const karzinka = () => toast("✅Savatchaga qo'shildi!");

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((error) => {
        console.error("Ma'lumotlarni olishda xato:", error);
      });
  }, []);

  const AddToFavorites = (product) => {
    Context(product);
    notify();
  };

  const AddTokarzinka = (product) => {
    addToKarzinka(product);
    karzinka();
  };

  return (
    <div className="container_product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.splice(5, 8).map((item) => (
        <div
          key={item.id}
          className="relative border rounded-lg shadow-md p-4 bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          {/* "Акция" label */}
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 transform rotate-45 -translate-x-5 -translate-y-5">
            АКЦИЯ
          </div>
          <Link to={`/detalis/${item.id}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-contain mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </Link>
          <h2 className="text-md font-semibold mb-1">{item.title}</h2>
          {/* Strike-through old price */}
          <p className="text-gray-400 line-through text-sm mb-1">
            {item.discountPercentage * 20}cym
          </p>
          <p className="text-lg font-bold text-black mb-4">{item.price} сум</p>
          <div className="flex justify-between items-center">
            <button
              onClick={() => AddTokarzinka(item)}
              className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300"
            >
              <SlBasketLoaded size={21} /> В корзину
            </button>
            <button
              onClick={() => AddToFavorites(item)}
              className="border border-yellow-400 text-yellow-400 font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-50 hover:border-yellow-500 transition-all duration-300"
            >
              <CiHeart size={20} />
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
}

export default TovarAksiya;
