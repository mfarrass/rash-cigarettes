import { useContext, useState } from 'react';
import { BiCart } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext/ShopContext";

const Navbar = () => {

  const {quantity} = useContext(ShopContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="navbar">

        {/* LEFT */}
        <div className={`nav_links ${menuOpen ? "active" : ""}`}>

            <Link to="/" onClick={()=>setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/" onClick={()=>setMenuOpen(false)}>
              Our Cigarettes
            </Link>

        </div>


        {/* LOGO */}
        <Link to="/" className="logo">
          RASH CIGARETTES
        </Link>


        {/* RIGHT */}
        <div className="nav_right">

            <Link to="/cart" className="nav_icon_wrapper">
                <BiCart className="nav_icon" />
                <span className="nav_qty">{quantity}</span>
            </Link>

            {/* Hamburger */}
            <div 
              className="hamburger"
              onClick={()=>setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </div>

        </div>

    </nav>
  );
};

export default Navbar;
