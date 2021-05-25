import React from "react";
import TransListBook from "./TransListBook";

export default function TransListContainer({ books }) {
  console.log(books);
  return (
    <ul>
      {books.map((book) => {
        return <TransListBook book={book} />;
      })}
    </ul>
  );
}
