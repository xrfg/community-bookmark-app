import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import SearchBar from "./Components/SearchBar";
import Container from "./Context/Container";
import "./Sass/Reset.scss";

function App() {
  return (
    <Container>
      <HashRouter>
        <>
          <SearchBar />
          <Switch>
            <Route exact path="/">
              <Description />
              <Menu />
            </Route>

            <Route></Route>
          </Switch>
          <Footer />
        </>
      </HashRouter>
    </Container>
  );
}

export default App;
