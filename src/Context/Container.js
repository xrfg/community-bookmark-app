import React, { useEffect, useReducer } from "react";
import { MyContext } from "./MyContext";
import { Reducer } from "./Reducer";

const initialState = { data: [] };

export default function Container(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    // componentDidMount
    fetch(
      "https://spreadsheets.google.com/feeds/list/1mkGvGf_t-w4Zb0UyIAkDkqoA1Bt8SemKoYHRWcB7Y7c/1/public/values?alt=json"
    )
      .then((res) => res.json())
      .then((json) => {
        const data = []; /* this array will eventually be populated with the contents of the spreadsheet's rows */

        const rows = json.feed.entry;

        for (const row of rows) {
          const formattedRow = {};

          for (const key in row) {
            if (key.startsWith("gsx$")) {
              /* The actual row names from your spreadsheet
               * are formatted like "gsx$title".
               * Therefore, we need to find keys in this object
               * that start with "gsx$", and then strip that
               * out to get the actual row name
               */

              formattedRow[key.replace("gsx$", "")] = row[key].$t;
            }
          }

          data.push(formattedRow);
        }

        dispatch({ type: "load", payload: data });
      });
  }, []);
  return (
    <MyContext.Provider value={{ data: state.data, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
}
