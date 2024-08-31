import { Arrival } from "./arrival";
import { Hero } from "./hero";
import { Promotional } from "./promotional";
import { Section } from "./section";


const HomeView = () => {
  return (
    <>
      <Hero />
      <div className="m-10">
        <Section />
        <Arrival />
      </div>
      <Promotional />
    </>
  );
};

export default HomeView;
