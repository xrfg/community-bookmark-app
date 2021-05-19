import React, { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import Bookmark from "./Bookmark";

export default function Menu() {
  const { data, dispatch } = useContext(MyContext);
  console.log(data);
  return (
    <div>
      <h2>MENU</h2>
      <Bookmark />
    </div>
  );
}
