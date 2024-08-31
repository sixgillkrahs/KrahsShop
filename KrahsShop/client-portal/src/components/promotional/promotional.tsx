import promotional1 from "../../assets/images/promotional/promotional1.webp";
import promotional2 from "../../assets/images/promotional/promotional2.webp";

const promotional = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <img
            src={promotional1}
            alt="promotional1"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <h1 className="absolute bottom-14 right-10 text-white text-6xl font-bold p-4">
            OUR BEST-OF
          </h1>
        </div>
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <img
            src={promotional2}
            alt="promotional2"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <h1 className="absolute bottom-14 right-10 text-white text-6xl font-bold p-4">
            LAST CHANCE!
          </h1>
        </div>
      </div>
    </>
  );
};

export default promotional;
