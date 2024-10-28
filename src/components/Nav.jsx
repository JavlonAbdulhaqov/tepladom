import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiShoppingCart, CiUser, CiSearch, CiHeart } from "react-icons/ci";
import "./Nav.css";
function Nav({ favorites, karzinka }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className=" container_product mx-auto  ">
        <ul className="flex justify-between items-center">
          <NavLink to={"/"}>
            <img className=" w-40 cursor-pointer" src={logo} alt="logo" />
          </NavLink>
          <li>
            <div>
              <CiSearch className="circle_icon" />
              <input
                className="circle_icons"
                type="text"
                placeholder="search"
                style={{
                  padding: "10px 10px 10px 30px",
                  borderRadius: "15px",
                  paddingLeft: "40px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "white",
                  fontSize: "17px",
                  width: "550px",
                  height: "40px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  transition: "all 0.3s ease",
                }}
              />
            </div>
          </li>
          <div className="  flex gap-10">
            <li className="crcle_menu">
              <Link to={"/favorites"}>
                <span
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#EF8100",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "10px",
                  }}
                >
                  {favorites?.length}
                </span>
                <CiHeart className="text-2xl" />
              </Link>
            </li>
            <li className="crcle_menu">
              <Link to={"/karzinka"}>
                <span
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "#EF8100",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "10px",
                  }}
                >
                  {karzinka?.length}
                </span>
                <CiShoppingCart className="text-2xl" />
              </Link>
            </li>
            <li className="crcle_menu_user ">
              <Link to={"/login"}>
                <div className=" flex items-center">
                  <CiUser className="text-2xl" />
                  <button>Profil</button>
                </div>
              </Link>
            </li>
          </div>
        </ul>
        <ul onClick={toggleMenu} className=" element flex justify-between mt-8">
          <NavLink to={"/maxsulotlar"} className="nav_btn">
            Товары по акции
          </NavLink>
          <NavLink to={"/newelemnet"} className="nav_btn Новинки">
            Новинки
          </NavLink>
          <NavLink to={"postavshikam"} className="nav_btn">
            Поставщикам
          </NavLink>
          <NavLink to={"contact"} className="nav_btn">
            Контакты
          </NavLink>
          <NavLink to={"newanswer"} className="nav_btn">
            Возврат товара
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default Nav;
