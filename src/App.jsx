import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RootLayaout from "./layout/RootLayaout";
import NotFound from "./components/NotFound";
import { useState } from "react";
import VozvratTavar from "./components/VozvratTavar"; 
import TovarAksiya from "./components/TovarAksiya";
import Novinki from "./components/Novinki";
import Postavshikam from "./components/Postavshikam";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Karzinka from "./components/Karzinka";
import Favorites from "./components/Favorites";
import Login from "./components/Login";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [karzinka, setKarzinka] = useState([]);

  // Karzinka funksiyasini yaratish
  const addToKarzinka = (product) => {
    const existingProduct = karzinka.some((item) => item.id === product.id);
    if (karzinka && !existingProduct) {
      setKarzinka([...karzinka, product]);
    } else {
      alert("Bu mahsulot allaqachon savatga qo'shilgan");
    }
  };

  // Context funksiyasini yaratish
  const Context = (product) => {
    const existingProduct = favorites.some((item) => item.id === product.id);
    if (favorites && !existingProduct) {
      setFavorites([...favorites, product]);
    } else {
      alert("Bu mahsulot allaqachon sevimlilar ro'yxatiga qo'shilgan");
    }
  };

  // Routerni Context dan keyin yaratish
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<RootLayaout karzinka={karzinka} favorites={favorites} />}
        >
          <Route
            index
            element={
              <Home
                addToKarzinka={addToKarzinka}
                karzinka={karzinka}
                Context={Context}
                favorites={favorites}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                Context={Context}
              />
            }
          />
          <Route
            path="karzinka"
            element={
              <Karzinka
                setKarzinka={setKarzinka}
                addToKarzinka={addToKarzinka}
                karzinka={karzinka}
              />
            }
          />

          <Route path="login" element={<Login />} />
          <Route path="maxsulotlar" element={<TovarAksiya />} />
          <Route path="newelemnet" element={<Novinki />} />
          <Route path="postavshikam" element={<Postavshikam />} />
          <Route path="contact" element={<Contact />} />
          <Route path="newanswer" element={<VozvratTavar />} />
          <Route path="detalis/:id" element={<Detail Context={Context} />} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
