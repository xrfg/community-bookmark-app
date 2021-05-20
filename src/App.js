import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import PageNotFound from "./Components/PageNotFound";
import SearchBar from "./Components/SearchBar";
import Theme from "./Components/Theme";
import Container from "./Context/Container";
import "./Sass/Reset.scss";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <div className="page">
          <SearchBar />
          <Switch>
            <Route exact path="/">
              <Description />
              <Menu />
            </Route>
            <Route path="/trans-nb-books" component={Theme} />

            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
