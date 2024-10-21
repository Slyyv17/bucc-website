import React from "react";
import PropTypes from "prop-types";

export default function EventCard({ event }) {
  return (
    <div className="relative group">
      <img
        src={event.image}
        alt={event.title}
        className="object-cover w-full h-64"
        loading="lazy"
      />

      {/* Title that appears on hover */}
      <h3
        className="absolute text-xl font-bold text-white transition-opacity duration-300 opacity-0 bottom-8 left-10 group-hover:opacity-100 font-primaryFF"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          zIndex: 20,
        }}
      >
        {event.title}
      </h3>
    </div>
  );
}

EventCard.propTypes = {
  event: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
