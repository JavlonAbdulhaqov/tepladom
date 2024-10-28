import React, { useEffect, useState } from "react";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Detail({ addToCart, addToFavorites }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // For navigation after deletion
  const [count, setCount] = useState(1);


  // Increment function
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Decrement function
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Fetch product details
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error:", err));
  }, [id]);

  // Delete product function
  const delProduct = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/"); // Navigate back to the homepage after deletion
      })
      .catch((err) => console.error("Error deleting:", err));
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg max-w-screen-lg">
      {product ? (
        <>
          {/* Product title */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product image */}
            <div className="flex justify-center items-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-80 object-contain rounded-lg shadow-sm"
              />
            </div>

            <div className="flex flex-col justify-between">
              <p className="text-lg text-gray-700 mb-4">
                {product.description}
              </p>

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-gray-900">
                  {product.price} сум
                </span>
                <span className="text-gray-500">(1.185*0.585)(20мм)</span>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {}}
                  className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  <CiShoppingBasket className="text-2xl" />
                </button>

                <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                  <CiHeart className="text-2xl" />
                </button>

                <button
                  onClick={delProduct}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  <MdDeleteOutline className="text-2xl" />
                </button>
              </div>

              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={handleDecrement}
                  className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
                >
                  -
                </button>
                <span className="text-lg font-medium">{count}</span>
                <button
                  onClick={handleIncrement}
                  className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Mahsulot ma'lumotlari yuklanmoqda...</p>
      )}
    </div>
  );
}

export default Detail;
