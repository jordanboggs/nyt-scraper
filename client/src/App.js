import React from "react";
import { BrowserRouter as Router, 
         Route, 
        //  Switch 
        } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./pages/Articles";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path = "/" component = {Articles} />
    </div>
  </Router>
);

export default App;
