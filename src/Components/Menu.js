import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import Bookmark from "./Bookmark";

export default function Menu() {
  const { data, dispatch } = useContext(MyContext);
  console.log(data);
  return (
    <div>
      <Route path="/:id">
        <Bookmark />
      </Route>
      <div>
        <h2>Books</h2>
      </div>
      <div>
        <h2>videos</h2>
      </div>
      <div>
        <h2>images</h2>
      </div>
    </div>
  );
}
