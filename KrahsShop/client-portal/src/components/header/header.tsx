import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Icon } from "../icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const textColor = isHomePage && !isScrolled ? "text-white" : "text-black";
  const bgColor = isHomePage && !isScrolled ? "bg-transparent" : "bg-white shadow-md";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bgColor}`}
    >
      <div className="flex justify-between items-center p-4">
        <h1 className={`text-4xl font-bold ${textColor}`}>
          THE NINES
        </h1>
        <nav>
          <ul className="flex gap-5">
            <li className="relative group">
              <span className={`cursor-pointer text-xl ${textColor}`}>
                Skirts
              </span>
            </li>
            <li className="relative group">
              <span className={`cursor-pointer text-xl ${textColor}`}>
                Clothes
              </span>
            </li>
            <li className="relative group">
              <span className={`cursor-pointer text-xl ${textColor}`}>
                Cufflinks
              </span>
            </li>
            <li className="relative group">
              <span className={`cursor-pointer text-xl ${textColor}`}>
                Ties
              </span>
            </li>
            <li className="relative group">
              <span className={`cursor-pointer text-xl ${textColor}`}>
                Socks
              </span>
            </li>
            <li className="relative group">
              <span className={`cursor-pointer text-xl ${textColor}`}>
                Accessories
              </span>
            </li>
            <li className="relative group">
              <span className={`cursor-pointer text-xl ${textColor}`}>
                Last Chance
              </span>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Icon
            icon={FaSearch}
            className={`${textColor} text-xl`}
          />
          <Icon
            icon={FaHeart}
            className={`${textColor} text-xl`}
          />
          <Link to="/register">
            <Icon
              icon={FaUser}
              className={`${textColor} text-xl`}
            />
          </Link>
          <Icon
            icon={FaShoppingCart}
            className={`${textColor} text-xl`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
