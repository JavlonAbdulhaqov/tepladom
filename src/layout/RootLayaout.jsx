import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function RootLayaout({ Context, favorites, karzinka, addToKarzinka }) {
  return (
    <div>
      <Nav
        Context={Context}
        favorites={favorites}
        addToKarzinka={addToKarzinka}
        karzinka={karzinka}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayaout;
