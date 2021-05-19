import React from "react";
import { HashRouter } from "react-router-dom";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import SearchBar from "./Components/SearchBar";
import Container from "./Context/Container";

function App() {
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
