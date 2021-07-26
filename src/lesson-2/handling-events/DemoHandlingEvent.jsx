import React, { Component } from 'react'

export default class DemoHandlingEvent extends Component {

    greeting = () =>{
        alert("Welcome to my channel!");
    }

    subcribe = name =>{
        alert("Thank you " + name + " for subcribing my channel");
    }
    render() {
        return (
            <div>
                <button className="btn btn-info" onClick={this.greeting}>Click me!</button>
                <button className="btn btn-danger" onClick={() => this.subcribe("Như")}>Subcribe</button>
            </div>
        )
    }
}
