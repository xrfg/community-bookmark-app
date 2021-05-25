import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import PageNotFound from "./Components/PageNotFound";
import Trans from "./Components/Trans";

import Container from "./Context/Container";
import "./Sass/Reset.scss";

function App() {
  return (
    <Container>
      <HashRouter>
        <div className="page">
          <Header />
          <Switch>
            <Route exact path="/">
              <Menu />
            </Route>
            <Route path="/trans-nb-books" component={Trans} />

            <Route path="/about" component={Description} />
            <Route path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    </Container>
  );
}

export default App;
