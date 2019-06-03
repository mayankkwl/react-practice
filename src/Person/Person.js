import React from "react";

import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} of {props.age} old
      </p>
      <p>{props.children}</p>
      <input value={props.name} type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
