import { useState } from "react";
import NavBar from "./navBar";
import PageFooter from "./pageFooter";
import ExecutiveCard from "./ExecutiveCard";
import timeLine from "../assets/timeline.jpg";
import testimonialImage from "../assets/testimonial-image.jpg";
import executive from "../assets/executive.jpg";
import talkToUs1 from "../assets/talk-to-us-1.jpg";
import talkToUs2 from "../assets/talk-to-us-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRightAlt,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  // Get testimonials from the backend
  // const [testimonials, setTestimonials] = useState([]);
  // useEffect(() => {
  //     fetch("https://api.bucc.com/testimonials")
  //     .then((response) => response.json())
  //     .then((data) => setTestimonials(data));
  // }, []);

  // Makeshift testimonials

  const testimonials = [
    {
      name: "Emeka Doe",
      position: "Past BUCC President",
      text: "The department offers a vibrant and dynamic learning environment where curiosity is encouraged, and creativity is celebrated. The courses are well-structured, blending theoretical knowledge with hands-on experience.",
      image: testimonialImage,
    },
    {
      name: "Jane Doe",
      position: "Past BUCC Vice President",
      text: "The department offers a vibrant and dynamic learning environment where curiosity is encouraged, and creativity is celebrated. The courses are well-structured, blending theoretical knowledge with hands-on experience.",
      image: testimonialImage,
    },
  ];

  // State to manage current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to manage the start index of the visible executive cards
  const [startIndex, setStartIndex] = useState(0);
  const maxVisible = 12;

  // Function to handle next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next and previous executive cards
  const handleNext = () => {
    if (startIndex + maxVisible < executives.length) {
      setStartIndex(startIndex + maxVisible);
    }
  };

  const handlePrev = () => {
    if (startIndex - maxVisible >= 0) {
      setStartIndex(startIndex - maxVisible);
    }
  };

  // Executive List
  const executives = [
    {
      name: "John Doe",
      position: "BUCC President",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Vice President",
      image: executive,
    },
    {
      name: "Emeka Doe",
      position: "BUCC Secretary",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Treasurer",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Treasurer",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Treasurer",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Treasurer",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Treasurer",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Treasurer",
      image: executive,
    },
    {
      name: "Jane Doe",
      position: "BUCC Treasurer",
      image: executive,
    },
  ];
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Hero Menu */}
      <main className="flex items-center justify-center h-full bg-center bg-no-repeat bg-cover bg-heroImage md:h-screen py-36 font-primaryFF">
        <h1 className="m-auto text-xl font-bold text-white md:text-4xl sm:text-3xl">
          Babcock University Computer Club
        </h1>
      </main>

      <section className="flex flex-col gap-10 px-6 py-10 bg-white md:px-12">
        <h2 className="text-2xl font-bold text-center text-primary md:text-left">
          BUCC at a glance
        </h2>
        <div className="flex flex-col md:flex-row gap-7 h-3/5">
          {/* Mission and Vision Section */}
          <aside className="md:flex-7">
            <h3 className="text-xl font-bold text-center text-primary">
              Mission and Vision
            </h3>
            <div className="flex flex-col gap-20 p-8 bg-grey justify-evenly md:p-16 rounded-ss-3xl">
              {/* Mission */}
              <div className="flex gap-10">
                <h4 className="text-lg font-bold text-primary">Mission</h4>
                <p className="text-sm">
                  Adventist education prepares people for useful and joy-filled
                  lives, fostering friendship with God, whole-person
                  development, Bible-based values, and selfless service in
                  accordance with the Seventh-day Adventist mission to the
                  world.
                </p>
              </div>
              {/* Vision */}
              <div className="flex gap-10">
                <h4 className="text-lg font-bold text-primary">Vision</h4>
                <p className="text-sm">
                  To be a global leader in computer engineering and sciences,
                  fostering innovation and excellence through cutting-edge
                  research, exceptional education, and industry collaboration,
                  empowering students and professionals to shape the future of
                  technology for a better world.
                </p>
              </div>
            </div>
          </aside>

          {/* Achievements on a timeline */}
          <aside className="flex justify-center gap-7 h-96">
            <img src={timeLine} alt="Timeline" className="" />
            <div className="flex flex-col justify-evenly">
              <h3 className="flex flex-col text-3xl font-bold text-center text-primary">
                3000+ <span className="text-lg font-normal">Students</span>
              </h3>
              <h3 className="flex flex-col text-3xl font-bold text-center text-primary">
                95%{" "}
                <span className="text-lg font-normal">
                  Employable Graduates
                </span>
              </h3>
              <h3 className="flex flex-col text-3xl font-bold text-center text-primary">
                40+{" "}
                <span className="text-lg font-normal">Expert Lecturers</span>
              </h3>
              <h3 className="flex flex-col text-3xl font-bold text-center text-primary">
                4 <span className="text-lg font-normal">Programs Offered</span>
              </h3>
            </div>
          </aside>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-10 bg-white md:px-12">
        <h2 className="text-xl font-bold md:text-2xl text-primary mb-7">
          Verified Testimonies from Students, Join the Community
        </h2>

        <div className="flex flex-col gap-7 h-3/5 md:flex-row ">
          <div className="flex flex-col gap-5 p-10 rounded-lg bg-primary flex-5 ">
            <div className="flex justify-between">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-40 h-40 rounded-full"
              />
              <FontAwesomeIcon
                icon={faQuoteRightAlt}
                className="text-4xl text-yellow"
              />
            </div>
            <p className="text-white testimonial-text">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-white">
                  {testimonials[currentIndex].position}
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center justify-center w-6 h-6 p-2 border rounded-full bg-inherit border-yellow text-yellow"
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="flex items-center justify-center w-6 h-6 p-2 text-white rounded-full bg-yellow border-yellow "
                >
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 flex-5 md:px-20">
            <h4 className="text-xl font-semibold text-primary">Testimonials</h4>
            <h5 className="text-2xl font-bold text-black md:text-3xl">
              Our Students Say About Us
            </h5>
            <p className="text-lg">
              We show our students testimonies year by year showing their point
              of view of the department. Both negative and positive, we thrive
              to change for the growth of the department. Bucc students are
              always proud members of the faculty.
            </p>
          </div>
        </div>
      </section>

      {/* About BUCC */}
      <section className="h-full px-6 mb-10 text-white bg-center bg-no-repeat bg-cover bg-about-us md:px-12 py-28 " id="about-us">

        <div className="flex flex-col w-full h-full gap-10 md:w-1/2 ">
          <h2 className="text-xl font-bold md:text-2xl mb-7">ABOUT BUCC</h2>
          <p>
            The Babcock University Computer Club (BUCC) is a vibrant community
            of tech enthusiasts, innovators, and future leaders in the field of
            computer science and engineering. Our club is dedicated to fostering
            a culture of learning, creativity, and collaboration among students
            who are passionate about technology.
          </p>
          <div className="flex gap-10">
            <button className="w-2/5 p-2 text-black bg-yellow">
              Read More
            </button>
            <button className="w-2/5 p-2 border border-yellow text-yellow">
              Join us
            </button>
          </div>
        </div>
      </section>

      {/*Executives section  */}
      <section className="grid gap-10 px-6 py-10 bg-white md:px-12">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold md:text-2xl mb-7">
            We Celebrate Our Past <br />
            And <span className="text-primary">Present Executives</span>
          </h2>
          <button className="text-black">Filter</button>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="text-primary"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            &#9664; {/* Left arrow */}
          </button>

        <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
      {executives
        .slice(startIndex, startIndex + maxVisible)
        .map((executive, index) => (
          <ExecutiveCard key={index} executive={executive} />
        ))}
    </div>

    <button
      className="bg-transparent text-primary"
      onClick={handleNext}
      disabled={startIndex + maxVisible >= executives.length}
    >
      &#9654; {/* Right arrow */}
    </button>
  </div>
</section>


      {/* Contact us form */}
      <section id="contact-us">
        <div className="grid px-6 py-10 text-black md:grid-cols-2 md:px-12 md:relative">
          <img src={talkToUs1} alt="Talk to us 1" />
          <img src={talkToUs2} alt="Talk to us 2" />

          <form className="flex flex-col justify-center w-full my-10 bg-white rounded-lg md:p-10 md:absolute md:bottom-14 md:right-12 md:w-1/2">
            <h2 className="text-2xl font-bold text-center text-primary mb-7">Talk to us</h2>

            <label htmlFor="name" className="mb-5 text-lg font-semibold">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="p-2 mb-5 bg-white border border-black"
            />
            <label htmlFor="Email" className="mb-5 text-lg font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="p-2 mb-5 bg-white border border-black"
            />
            <label htmlFor="Message" className="mb-5 text-lg font-semibold">Message</label>
            <textarea className="p-2 mb-5 bg-white border border-black" />

            <button type="submit" className="w-2/5 p-2 font-bold text-black place-self-end bg-yellow md:w-1/5">Send</button>
          </form>
          <p className="w-full p-4 text-lg font-semibold md:w-4/5">
            You can contact us by filling the form, trust we’ll receive your
            message. If you have filled in your data, you will be replied
            shortly via email
          </p>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </>
  );
}
