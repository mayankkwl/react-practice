import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Manya", age: "11" },
      { id: "2", name: "Akanksha", age: "39" },
      { id: "3", name: "Mayank", age: "40" }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    console.log("persons ", persons);
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandeler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };
  togglePersonalHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "0.1rem solid blue",
      padding: "0.8rem",
      cursor: "pointer",
      color: "white"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler.bind(this, index)}
                changed={e => {
                  this.nameChangeHandeler(e, person.id);
                }}
                key={person.id}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <p className={classes.join(" ")}>this is really working!</p>
        <button style={style} onClick={this.togglePersonalHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
