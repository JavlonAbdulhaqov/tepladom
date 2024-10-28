import React from "react";
import { Outlet } from "react-router-dom";
import NavHeader from "./NavHeader";
import Card from "./Card";

function Home({ Context, favorites, addToKarzinka, karzinka }) {
  return (
    <div className="container_product">
      {
        <main>
          <Outlet />
          <NavHeader />
          <Card
            Context={Context}
            favorites={favorites}
            addToKarzinka={addToKarzinka}
            karzinka={karzinka}
          />
        </main>
      }
    </div>
  );
}

export default Home;
