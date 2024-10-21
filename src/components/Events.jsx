import React from "react";
import NavBar from "./navBar";
import PageFooter from "./pageFooter";
import EventCard from "./EventCard";

// Import images
import Event from "../assets/event.jpg";
import Dinner from "../assets/images/BUCC DINNER.png";
import Hackathon from "../assets/images/cavista Hackathon.png";
import Seminar from "../assets/images/BUCC Seminar.png";
import Conference from "../assets/images/BUCC Conference.png";
import CareerFair from "../assets/images/Career fair.png";

export default function Events() {
  // Array of events data
  const events = [
    { image: Event, title: "TechXplore" },
    { image: Dinner, title: "BUCC Dinner" },
    { image: Hackathon, title: "Cavista Hackathon" },
    { image: Seminar, title: "BUCC Seminar" },
    { image: Conference, title: "BUCC Conference" },
    { image: CareerFair, title: "Career Fair" },
  ];

  return (
    <>
      <NavBar />

      {/* Main events section */}
      <div className="flex flex-col items-center mb-4">
        <h1 className="mt-6 text-4xl font-bold text-center font-primaryFF">Events</h1>
        {/* Container for event cards */}
        <div className="w-full max-w-6xl p-2">
          <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>

      <PageFooter />
    </>
  );
}
