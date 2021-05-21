import React from "react";
import { v4 as uuid } from "uuid";

export default function TransListBook({ book }) {
  return (
    <div className="book-box" key={uuid()}>
      <span>Title: {book.title}</span>
      <span>Author: {book.author}</span>
      {book.fictionnonfictionother && (
        <span>Genre: {book.fictionnonfictionother}</span>
      )}
      {book.transornbauthor && (
        <span>Trans* or NB author: {book.transornbauthor}</span>
      )}
      {book.transornbcharacters && (
        <span>Trans* or NB author: {book.transornbcharacters}</span>
      )}
      {book.shortdescription && (
        <span>Short Description: {book.shortdescription}</span>
      )}
      {book.comments && <span>Comments: {book.comments}</span>}
    </div>
  );
}
