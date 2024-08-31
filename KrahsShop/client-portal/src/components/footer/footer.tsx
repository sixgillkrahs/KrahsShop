import { FaFacebook, FaInstagram, FaTwitter, FaTiktok ,FaYoutube,FaPinterest } from "react-icons/fa";
import { Icon } from "../icons";
const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-950 py-10 flex justify-around p-4 items-center">
        <div className="flex flex-col gap-2 w-1/4">
          <h1 className="text-white text-2xl font-bold">Contact Us</h1>
          <h1 className="text-white text-2xl font-bold">Follow Us!</h1>
          <div className="flex gap-3 items-center">
            <Icon icon={FaFacebook} className="text-white text-xl" />
            <Icon icon={FaInstagram} className="text-white text-xl" />
            <Icon icon={FaTwitter} className="text-white text-xl" />
            <Icon icon={FaTiktok} className="text-white text-xl" />
            <Icon icon={FaYoutube} className="text-white text-xl" />
            <Icon icon={FaPinterest} className="text-white text-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/4">
          <ul className="text-white text-sm">
            <li>About Us</li>
            <li>Our philosophy</li>
            <li>Our team</li>
            <li>Customers reviews</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-1/4">
          <ul className="text-white text-sm">
            <li>Delivery costs</li>
            <li>Exchange and return</li>
            <li>Size guide</li>
            <li>Our guides and tutorials</li>
            <li>Wedding offer (♬ Celebration!)</li>
            <li>Privacy notice</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-1/4">
          <h1 className="text-white text-2xl font-bold">
            Suscribe to our newsletter!
          </h1>
          <p className="text-white text-sm">
            You may unsubscribe at any moment. For that purpose, please find our
            contact info in the legal notice.
          </p>
          <input
            type="text"
            placeholder="Your email"
            className="bg-transparent border-2 border-white  p-2 w-full"
          />
        </div>
      </div>
      <div className="w-full h-10 flex justify-center items-center">
        <p className="text-gray-300 text-sm">Réalisé par Agence Off</p>
      </div>
    </footer>
  );
};

export default Footer;
