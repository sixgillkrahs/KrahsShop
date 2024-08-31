import "./hero.css";
import hero from "../../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="h-screen w-full">
      <img src={hero} alt="hero" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-end">
        <div className="flex flex-col justify-center items-center mr-16">
           <h1 className="text-white text-7xl font-bold">ESSENTIALS</h1>
           <button className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-sm mt-4">Buy 2 get 3rd half price</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
