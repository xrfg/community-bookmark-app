import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import Bookmark from "./Bookmark";

export default function Menu() {
  const { books, videos, memes } = useContext(MyContext);
  console.log(books);
  console.log(videos);
  console.log(memes);

  const titles = ["Trans*/NB Books", "videos", "memes"];
  const urls = ["trans-nb-books", "videos", "memes"];

  return (
    <div>
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
