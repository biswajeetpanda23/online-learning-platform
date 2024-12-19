import React from "react";
import ImageSlider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <header className="text-center my-5">
        <h1 className="text-4xl font-bold text-brand">Welcome to SyntaxSchool</h1>
        <p className="text-gray-600">Learn new skills and grow your career!</p>
      </header>
      
      <ImageSlider />

      <section className="my-10 text-center">
        <h2 className="text-3xl font-semibold mb-5">Why Choose Us?</h2>
        <p className="text-gray-600">
          We provide the best online courses for learners across the globe.
        </p>
      </section>
    </div>
  );
};

export default Home;
