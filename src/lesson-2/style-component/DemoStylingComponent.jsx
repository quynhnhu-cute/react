import React, { Component } from "react";
import "./ExternalStyle.css";

//Styling with module
import classes from './StylingWithModule.module.css';
// classes là object
export default class DemoStylingComponent extends Component {
  render() {
      //HeadingStyle là object
    const headingStyle = { backgroundColor: "red", color: "white" };

    console.log(classes);
    return (
      <div>
        {/* Inline style  */}
        <h1 style={headingStyle}>
          Demo Inline Style
        </h1>

         {/* External style  */}
         <h1 className="heading">
          Demo External Style
        </h1>

        {/* Module style  */}
        <h1 className={classes.blueBackground}>
          Module Styling
        </h1>
      </div>
    );
  }
}
