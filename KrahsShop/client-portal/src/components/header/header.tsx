import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Icon } from "../icons";
import { Link } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../../api/user/userAPI";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const IsLoggedIn: boolean = isLoggedIn();
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleLogout = async () => {
    await logoutUser();
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === "/";
  const textColor = isHomePage && !isScrolled ? "text-white" : "text-black";
  const bgColor =
    isHomePage && !isScrolled ? "bg-transparent" : "bg-white shadow-md";

  return (
    <header>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bgColor}`}
      >
        {!(isHomePage && !isScrolled) ? (
          <></>
        ) : (
          <div className="w-full h-full bg-black">p</div>
        )}
        <div className="flex justify-between items-center p-4">
          <h1>
            <Link to={"/"} className={`text-4xl font-bold ${textColor}`}>
              THE NINES
            </Link>
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
            <Icon icon={FaSearch} className={`${textColor} text-xl`} />
            <Icon icon={FaHeart} className={`${textColor} text-xl`} />
            {IsLoggedIn ? (
              <>
                <Link to="/profile">
                  <Icon icon={FaUser} className={`${textColor} text-xl`} />
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <Link to="/login">
                <Icon icon={FaUser} className={`${textColor} text-xl`} />
              </Link>
            )}
            <Icon icon={FaShoppingCart} className={`${textColor} text-xl`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
