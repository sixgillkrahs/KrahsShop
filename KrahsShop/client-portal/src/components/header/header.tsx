import { useEffect, useState } from "react";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Icon } from "../icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <h1
          className={`text-4xl font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          THE NINES
        </h1>
        <nav>
          <ul className="flex gap-5">
            <li className="relative group">
              <span
                className={`cursor-pointer text-xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Skirts
              </span>
            </li>
            <li className="relative group">
              <span
                className={`cursor-pointer text-xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Clothes
              </span>
            
            </li>
            <li className="relative group">
              <span
                className={`cursor-pointer text-xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Cufflinks
              </span>
             
            </li>
            <li className="relative group">
              <span
                className={`cursor-pointer text-xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Ties
              </span>
             
            </li>
            <li className="relative group">
              <span
                className={`cursor-pointer text-xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Socks
              </span>
              
            </li>
            <li className="relative group">
              <span
                className={`cursor-pointer text-xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Accessories
              </span>
              
            </li>
            <li className="relative group">
              <span
                className={`cursor-pointer text-xl ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Last Chance
              </span>
              
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <Icon
            icon={FaSearch}
            className={`${isScrolled ? "text-black" : "text-white"} text-xl`}
          />
          <Icon
            icon={FaHeart}
            className={`${isScrolled ? "text-black" : "text-white"} text-xl`}
          />
          <Icon
            icon={FaUser}
            className={`${isScrolled ? "text-black" : "text-white"} text-xl`}
          />
          <Icon
            icon={FaShoppingCart}
            className={`${isScrolled ? "text-black" : "text-white"} text-xl`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
