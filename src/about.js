import React from "react";
import './index.css';
function About(){
    return (
      <div>
        <section className="about text-white px-20 py-10">
          <h2 className="lg:text-6xl text-4xl py-10 ">
            Carry Out Lab Experiments Seamlessly
          </h2>
          <p className="text-lg">Laboratory Processes now at Your FingerTips</p>
        </section>
        <div className="flex justify-center mt-10">
          <button className="border rounded-full p-6 text-white bg-main-blue font-bold text-xl h-10 flex items-center justify-center">
            Get Started Now
          </button>
        </div>
      </div>
    );
}

export default About;