import "./sections.css";

const Section = () => {
  return (
    <div className="text-center max-w-3xl mx-auto m-16 flex flex-col gap-5" >
      <h1 className="text-4xl font-bold">ELEGANCE AGITATOR</h1>
      <p>
        <strong>
          Organic materials, respect for craftsmanship, responsible fashion...
        </strong>
        <br />
        What if instead of talking about what we already do, we told you about
        what more we do?
      </p>
      <p>
        <a href="" className="underline">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Section;
