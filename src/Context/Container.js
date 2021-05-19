import React, { useEffect, useReducer } from "react";
import { MyContext } from "./MyContext";
import { Reducer } from "./Reducer";

const initialState = { books: [], memes: [], videos: [] };

export default function Container(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    // componentDidMount
    fetch(
      "https://spreadsheets.google.com/feeds/list/1mkGvGf_t-w4Zb0UyIAkDkqoA1Bt8SemKoYHRWcB7Y7c/1/public/values?alt=json"
    )
      .then((res) => res.json())
      .then((json) => {
        const data = [];

        const rows = json.feed.entry;

        for (const row of rows) {
          const formattedRow = {};

          for (const key in row) {
            if (key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t;
            }
          }

          data.push(formattedRow);
        }

        dispatch({ type: "loadbooks", payload: data });
      });
  }, []);

  useEffect(() => {
    // componentDidMount
    fetch(
      "https://spreadsheets.google.com/feeds/list/1mkGvGf_t-w4Zb0UyIAkDkqoA1Bt8SemKoYHRWcB7Y7c/2/public/values?alt=json"
    )
      .then((res) => res.json())
      .then((json) => {
        const data = [];

        const rows = json.feed.entry;

        for (const row of rows) {
          const formattedRow = {};

          for (const key in row) {
            if (key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t;
            }
          }

          data.push(formattedRow);
        }

        dispatch({ type: "loadmemes", payload: data });
      });
  }, []);

  useEffect(() => {
    // componentDidMount
    fetch(
      "https://spreadsheets.google.com/feeds/list/1mkGvGf_t-w4Zb0UyIAkDkqoA1Bt8SemKoYHRWcB7Y7c/3/public/values?alt=json"
    )
      .then((res) => res.json())
      .then((json) => {
        const data = [];

        const rows = json.feed.entry;

        for (const row of rows) {
          const formattedRow = {};

          for (const key in row) {
            if (key.startsWith("gsx$")) {
              formattedRow[key.replace("gsx$", "")] = row[key].$t;
            }
          }

          data.push(formattedRow);
        }

        dispatch({ type: "loadvideos", payload: data });
      });
  }, []);

  return (
    <MyContext.Provider
      value={{
        books: state.books,
        memes: state.memes,
        videos: state.videos,

        dispatch,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
