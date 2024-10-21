// src/components/Programs.jsx

import React from "react";
import img1 from "../assets/images/unsplash_KUzlAah2dog.png";
import img2 from "../assets/images/Computer Science 1.png";
import img3 from "../assets/images/Software Engineering 1.png";
import img4 from "../assets/images/Information Technology 1.png";
import NavBar from "./navBar";
import PageFooter from "./pageFooter";

function Programs() {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      <div className="flex flex-col items-center justify-center gap-5 mb-4 font-pryFF">
        {/* Heading Section */}
        <section className="w-full mx-10 mt-4">
          <h1 className="text-4xl font-bold text-center text-black font-primaryFF">
            Undergraduate Programs
          </h1>
        </section>

        {/* Image and Info Section */}
        <section className="flex flex-col items-center justify-center w-full md:flex-row md:w-3/4 lg:w-2/3 h-fit">
          {/* Image */}
          <article className="w-full md:w-1/2">
            <img
              className="w-full h-auto"
              src={img1}
              alt="Undergraduate program visual"
            />
          </article>

          {/* Info Section */}
          <article className="w-full p-6 bg-gray-100 md:w-1/2">
            <div className="mb-4">
              <h1 className="text-2xl font-bold font-primaryFF">
                Undergraduate Education
              </h1>
              <p className="mt-2 text-sm font-primaryFF">
                Babcock University computer club Undergrad is your guide to
                undergraduate academics and opportunities run by the Vice
                Provost for Undergraduate Education.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold font-primaryFF">Majors</h2>
              <p className="mt-1 text-sm font-primaryFF">
                Explore the 5 major fields of undergraduate study for Babcock
                University computer club.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold font-primaryFF">
                Undergraduate Facts
              </h2>
              <p className="mt-1 text-sm font-primaryFF">
                Approximately 1,000+ undergraduate students attend Babcock
                University. Learn more about the undergraduate program and
                student body.
              </p>
            </div>
          </article>
        </section>

        {/* pep talk */}
        <section className="flex items-center justify-center w-full h-auto p-4 font-bold text-center text-primary bg-yellow font-primaryFF">
          Seven schools on one campus offer students boundless opportunities to
          pursue their passions and collaborate on solving complex global
          problems.
        </section>

        {/* Graduate Programs in BUCC */}
        <section className="w-full mx-10 mt-4">
          <h1 className="text-4xl font-bold text-center text-black font-primaryFF">
            Graduate Programs
          </h1>
        </section>

        {/* Bsc Computer Science */}
        <section className="flex flex-col-reverse items-center justify-center w-full md:flex-row md:w-3/4 lg:w-2/3 h-fit">
          {/* Info Section */}
          <article className="w-full p-6 bg-gray-100 md:w-1/2">
            <div className="mb-4">
              <h1 className="text-2xl font-bold font-primaryFF">
                Bachelor of Science in Computer Science
              </h1>
              <p className="mt-2 text-sm font-primaryFF">
                Students explore programming, algorithms, data structures,
                artificial intelligence, and cyber security, preparing them for
                careers in software development, data science, and more.
              </p>
            </div>
          </article>

          {/* Image */}
          <article className="w-full md:w-1/2">
            <img
              className="w-full h-auto"
              src={img2}
              alt="Bsc Computer Science"
            />
          </article>
        </section>

        {/* Bsc Software Engineering */}

        <section className="flex flex-col-reverse items-center justify-center w-full md:flex-row md:w-3/4 lg:w-2/3 h-fit">
          {/* Image */}
          <article className="w-full md:w-1/2">
            <img
              className="w-full h-auto"
              src={img3}
              alt="Bsc Software Engineering"
            />
          </article>

          {/* Info Section */}
          <article className="w-full p-6 bg-gray-100 md:w-1/2">
            <div className="mb-4">
              <h1 className="text-2xl font-bold font-primaryFF">
                Bachelor of Science in Software Engineering
              </h1>
              <p className="mt-2 text-sm font-primaryFF">
                The Bachelor of Science in Software Engineering program is
                designed to equip students with the skills and knowledge
                required to design, develop, and maintain complex software
                systems.
              </p>
            </div>
          </article>
        </section>

        {/* Bsc Information Technology */}
        <section className="flex flex-col items-center justify-center w-full md:flex-row md:w-3/4 lg:w-2/3 h-fit">
          {/* Info Section */}
          <article className="w-full p-6 bg-gray-100 md:w-1/2">
            <div className="mb-4">
              <h1 className="text-2xl font-bold font-primaryFF">
              Bachelor of Science in Information Technology
              </h1>
              <p className="mt-2 text-sm font-primaryFF">
              The Bachelor of Science in Information Technology program provides a comprehensive education in the deployment, management, and support of information technology systems.
              </p>
            </div>
          </article>

          {/* Image */}
          <article className="w-full md:w-1/2">
            <img
              className="w-full h-auto"
              src={img4}
              alt="Bsc Information Technology"
            />
          </article>
        </section>
      </div>

      {/* import footer section */}
      <PageFooter />
    </>
  );
}

export default Programs;
