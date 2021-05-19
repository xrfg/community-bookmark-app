import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import Bookmark from "./Bookmark";

export default function Menu() {
  const { books, videos, memes, dispatch } = useContext(MyContext);
  console.log(books);
  console.log(videos);
  console.log(memes);

  const icons = ["books", "videos", "images"];

  return (
    <div>
      {icons.map((icon) => {
        return <Bookmark name={icon} key={icon} />;
      })}
    </div>
  );
}
