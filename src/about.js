import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngles} from '@fortawesome/free-solid-svg-icons'
function About() {
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
      <section className="grid md:grid-cols-2 gap-8 pt-20 md:px-20 px-10">
        <div>
          <img
            src="images/about-img.jpg"
            alt="Laboratory Attendant Using a Microscope"
          />
        </div>
        <div>
          <h2 className="text-lighter-blue font-bold text-2xl border-b-3 border-b-black mb-2">
            About EasyLabs
          </h2>
          <p className="text-4xl font-bold text-main-blue">
            EasyLabs helps you easily carry out laboratory processes with or
            without help. With concrete result analytics.
          </p>
          <p className="text-lg leading-8">
            EasyLabs is a platform which helps students as well as tutors carry
            out laboratory practicals effectively by providing step by step
            processes of carrying out every practical.
          </p>
          <br />
          <p className="text-lg leading-8">
            It solves the problem of doing laboratory works without the presence
            of a lab attendant. A newbie can totally carry out the practical by
            just following the steps provided by this software.
          </p>
          <br />
          <p className="text-lg leading-8">
            Obtain Results and Practical Observations. Results can be evaluated
            via the Platform
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-center font-bold text-2xl">Steps to Get Started</h2>
        <div className="flex md:justify-around flex-column">
          <div className="border border-lightest ">
            <p className="h-10 w-10 border rounded-full border-blue flex items-center justify-center text-lg ">
              1
            </p>
            <p>Signup by Clicking Get Started Button</p>
          </div>
          <div>
            <p>2</p>
            <p>Select the Practical You Want to Carry Out</p>
          </div>
          <div>
            <p>3</p>
            <p>
              Follow the tools and Procedures Outlined and you're good to go.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="grid md:grid-cols-2 gap-8 pt-20 md:px-20 px-10">
        <div>
          <img src="images/contact.jpg" alt="Laboratory" />
        </div>
        <div>
          <h3>
            For Collaborations and Enquiries you can Reach Out Via this Form
          </h3>
          <form>
            <label for="name">Name</label>
            <input
              type={"text"}
              id="name"
              className="border p-4 w-full block"
            ></input>
            <label for="email">Email</label>
            <input
              type={"email"}
              id="email"
              className="border p-4 w-full block"
            ></input>
            <label for="Message">Your Message</label>
            <textarea
              placeholder="Enter Your Message..."
              className="border p-4 w-full block"
            ></textarea>
            <button className="bg-main-blue text-white font-bold border rounded p-5 my-6">Send Message</button>
          </form>
        </div>
      </section>
      <footer className="p-4 bg-lighter-blue">
          <p className="text-center">Made with Love by <a href="twitter.com/nnekasandra_">Nneka</a></p>
      </footer>
    </div>
  );
}

export default About;
