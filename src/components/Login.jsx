import React, { useState } from "react";

// Modal component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

// Login component
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(true); // Modal is open by default

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (username === "" || password === "") {
      alert("Iltimos, ma'lumotlarni to'ldiring");
      return;
    }

    // Check login credentials
    if (username === "javlonabdulhaqov5@gmail.com" && password === "java0405") {
      alert("Mufaqqiyatli tizimga kirdingiz");
      setIsOpen(false); // Close the modal on successful login
    } else {
      alert("Noto'g'ri login yoki parol");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Login;
