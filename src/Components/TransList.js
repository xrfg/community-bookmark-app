import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../Context/MyContext";
import "../Sass/TransList.scss";
import TransListContainer from "./TransListContainer";

export default function TransList() {
  const { books, filteredBooks, dispatch } = useContext(MyContext);

  const input = useRef();

  /* const [disabled, setDisabled] = useState(false); */

  const grabValueFromInput = (e) => {
    e.preventDefault();
    let filteredBooks = books.filter((book) => {
      let inputValue = input.current.value.toLowerCase();
      console.log(inputValue);

      if (book.title.toLowerCase().includes(inputValue)) {
        return true;
      }
      if (book.author.toLowerCase().includes(inputValue)) {
        return true;
      }
      return false;
    });

    dispatch({ type: "searchbooks", payload: filteredBooks });
    dispatch({ type: "searchstring", payload: input.current.value });
  };

  return (
    <>
      <form className="searchbar">
        <label>
          <input
            onChange={grabValueFromInput}
            ref={input}
            name="search"
            className="searchbar__input"
            type="text"
            placeholder="Search"
          />
        </label>
      </form>
      <TransListContainer books={filteredBooks} />
    </>
  );
}
