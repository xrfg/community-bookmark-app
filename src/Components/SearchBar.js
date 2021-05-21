import React, { useContext, useRef, useState } from "react";
import { MyContext } from "../Context/MyContext";
import "../Sass/SearchBar.scss";

export default function SearchBar() {
  const { dispatch } = useContext(MyContext);
  const input = useRef();

  /* const [disabled, setDisabled] = useState(false); */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    dispatch({ type: "search", payload: input.current.value });
  };
  return (
    <>
      <form className="searchbar">
        <label>
          <input
            onKeyUp={handleSubmit}
            ref={input}
            name="search"
            className="searchbar__input"
            type="text"
            placeholder="search"
          />
        </label>
      </form>
    </>
  );
}
