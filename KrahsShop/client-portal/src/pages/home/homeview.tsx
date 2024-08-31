import { Arrival, Hero, Promotional, Section } from "../../components";

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
