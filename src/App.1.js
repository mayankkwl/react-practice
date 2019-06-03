import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Manya", age: "11" },
      { name: "Akanksha", age: "39" },
      { name: "Mayank", age: "40" }
    ],
    otherState: "some other value"
  });
  const [otherState, setOtherState] = useState("set other value");
  console.log(personState, otherState);
  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Manya", age: "12" },
        { name: "Akanksha", age: "40" },
        { name: "Mayank", age: "41" }
      ],
      otherState: personState.otherState
    });
  };
  return (
    <div className="App">
      <h1>.</h1>
      <button onClick={this.switchNameHandler}>Switch button</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        My hobbies : racing
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};
export default App;
