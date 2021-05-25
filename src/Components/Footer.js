import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="navbar">
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}
