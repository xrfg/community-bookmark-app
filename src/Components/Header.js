import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Header.scss";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h3>bookmark collective</h3>
      </Link>
    </header>
  );
}
