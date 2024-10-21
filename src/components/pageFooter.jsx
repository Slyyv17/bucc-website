import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import logoWhite from "../assets/logoWhite.svg";

// Website footer element
export default function PageFooter() {
  // Links to quick pages
  const quickLinks = [
    { path: "/", text: "Home" },
    { path: "/programs", text: "Programs" },
    { path: "/events", text: "Events" },
    { path: "/#about-us", text: "About" },
    { path: "/#contact-us", text: "Contact" },
    { path: "/become-a-contributor", text: "Become a Contributor" },
  ];

  // Links to school pages
  const schoolLinks = [
    { path: "/school", text: "School" },
    { path: "/courses", text: "Courses" },
    { path: "/alumni", text: "Alumni" },
    { path: "/awards", text: "Awards" },
  ];

  // Links to partners pages
  const partnerLinks = [
    { path: "/stakeholders", text: "Stakeholders" },
    { path: "/affiliates", text: "Affiliates" },
    { path: "/awards", text: "Awards" },
  ];

  return (
    // Footer section
    <footer className="w-full px-5 py-10 text-white bg-primary font-primaryFF">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] lg:grid-cols-4">
        {/* BUCC Logo and Description */}
        <section className="flex flex-col items-center gap-5 lg:items-start">
          <img src={logoWhite} alt="Bucc Logo White" className="w-5/12 h-15" />
          <p className="text-center lg:text-left">
            The Babcock University Computer Club is a student chapter of the
            university’s computing and Engineering Sciences Department.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-5">
            <Link to="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </Link>
            <Link to="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </Link>
            <Link to="https://www.twitter.com">
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            </Link>
          </div>
        </section>

        {/* Quick Links */}
        <section className="flex flex-col items-center gap-5 lg:items-start">
          <h3 className="text-lg font-bold">Quicklinks</h3>
          <div className="flex flex-col items-center gap-2 lg:items-start">
            {quickLinks.map((link) =>
              link.path.includes("#") ? (
                <HashLink smooth key={link.path} to={link.path}>
                  {link.text}
                </HashLink>
              ) : (
                <Link key={link.path} to={link.path}>
                  {link.text}
                </Link>
              )
            )}
          </div>
        </section>

        {/* School Links */}
        <section className="flex flex-col items-center gap-5 lg:items-start">
          <h3 className="text-lg font-bold">School</h3>
          <div className="flex flex-col items-center gap-2 lg:items-start">
            {schoolLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.text}
              </Link>
            ))}
          </div>
        </section>

        {/* Partner Links */}
        <section className="flex flex-col items-center gap-5 lg:items-start">
          <h3 className="text-lg font-bold">Partners</h3>
          <div className="flex flex-col items-center gap-2 lg:items-start">
            {partnerLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.text}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
