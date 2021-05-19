import React from "react";
import { HashRouter } from "react-router-dom";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import SearchBar from "./Components/SearchBar";
import Container from "./Context/Container";

function App() {
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

      console.log(
        data
      ); /* do anything you want with the reformatted data here */
    });
  return (
    <Container>
      <HashRouter>
        <>
          <h1>Our BOOKMARK</h1>
          <SearchBar />
          <Menu />
          <Description />
          <Footer />
        </>
      </HashRouter>
    </Container>
  );
}

export default App;
