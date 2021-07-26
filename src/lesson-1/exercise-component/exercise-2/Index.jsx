import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import NavigationContent from "./NavigationContent";

class Index extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Home />
          </div>
        </div>
        <div className="row">
          {" "}
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <NavigationContent />
          </div>
          <div className="col-8">
            <Content/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
