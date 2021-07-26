import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
    fullName = "Như Cute";
    birthYear = 2000;

    renderStudent = () =>{
        const student = {
            fullName: "Như mập",
            className: "BC12",
            age: 21
        }
        const {fullName,className,age} = student;
        return(
            <div>
                <p>Name: {fullName}</p>
                <p>Age: {age}</p>
                <p>Class: {className}</p>
            </div>
        );
    }
    render() {
        return (
            <div>
                <p>This is {this.fullName}, {2021 - this.birthYear} years old</p>
                <h2>Student Info</h2>
                {this.renderStudent()}
            </div>
        )
    }
}
