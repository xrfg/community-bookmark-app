import React from "react";
import { Route, NavLink } from "react-router-dom";
import TransForm from "./TransForm";
import TransList from "./TransList";
import "../Sass/Trans.scss";

export default function Trans() {
  return (
    <div className="menu-box">
      <NavLink activeClassName="active-btn" to="/trans-nb-books/form">
        <div className="form-btn box">TransForm </div>
      </NavLink>
      <NavLink activeClassName="active-btn" to="/trans-nb-books/list">
        <div className="list-btn box">TransList </div>
      </NavLink>
      <Route path="/trans-nb-books/form" component={TransForm} />
      <Route path="/trans-nb-books/list" component={TransList} />
    </div>
  );
}
