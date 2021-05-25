import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Menu.scss";

import Bookmark from "./Bookmark";

export default function Menu() {
  const titles = ["Trans*/NB Books", "Videos", "Memes"];
  const urls = ["trans-nb-books", "videos", "memes"];

  return (
    <div className="icons-menu">
      {titles.map((icon, i) => {
        const url = urls[i];

        return (
          <Link to={{ pathname: `/${url}` }}>
            <Bookmark name={icon} key={icon} />
          </Link>
        );
      })}
    </div>
  );
}
