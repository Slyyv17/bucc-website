import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWhite.svg";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary">
      <img src={logoWhite} alt="BUCC logo" />
      <h1 className="text-4xl font-bold text-center text-white">Coming Soon</h1>
      <Link to="/" className="text-white underline mt-5">Go Back Home</Link>
    </div>
  );
}
