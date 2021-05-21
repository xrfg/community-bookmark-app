import React from "react";
import { Link, Route } from "react-router-dom";
import TransForm from "./TransForm";
import TransList from "./TransList";

export default function Trans() {
  return (
    <div>
      <Link to="/trans-nb-books/form">
        <div>transform </div>
      </Link>
      <Link to="/trans-nb-books/list">
        <div>translist </div>
      </Link>
      <Route path="/trans-nb-books/form" component={TransForm} />
      <Route path="/trans-nb-books/list" component={TransList} />
    </div>
  );
}
