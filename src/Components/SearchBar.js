import React, { useRef } from "react";
import "../Sass/SearchBar.scss";

export default function SearchBar() {
  const input = useRef();

  /* console.log(input.current.value); */
  return (
    <div className="searchbar">
      <label>
        <input
          ref={input}
          className="searchbar__input"
          type="text"
          placeholder="search"
        />
      </label>
    </div>
  );
}
