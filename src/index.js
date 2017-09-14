import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import "./style.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const alphabetLookup = {
  a: ["AWS", "Angular", "Ada", "ASP.net", "Angular 1.6", "Arduino", "Android"],
  b: ["Basic", "bash", "Brainfuck"],
  c: ["CleverCloud", "C#", "C++", "Clojure", "Coq", "Cobol"],
  d: ["Dart", "Delphi"],
  e: ["Elixir", "Express", "Eiffel", "Erlang", "Ecmascript"],
  f: ["Falcon", "Flow", "Firebase", "Fortran"],
  g: ["Guava", "Go", "Groovy"],
  h: ["Haskell", "Haxe", "Heroku"],
  i: ["IBM", "Idris", "Io", "Interlisp", "iOS"],
  j: ["Java", "JEE"],
  k: ["Kotlin"],
  l: ["Lisp", "Logo", "Lua"],
  m: ["Mongo","Maven", "Miranda", "MySql", "Matlab"],
  n: ["Nim", "Node"],
  o: ["Ocaml", "Objective-C", "Ocsigen"],
  p: ["Phoenix", "PHP", "Perl", "Python", "Postgresql"],
  q: ["QML", "Quasar"],
  r: ["Rust", "Ruby", "React"],
  s: ["Scala", "SmallTalk", "Swift"],
  t: ["TypeScript"],
  u: ["Ubuntu", "UnrealScript"],
  v: ["VHDL", "VBA"],
  w: ["Windows", "Websphere", "WeLoveDevs.com"],
  x: ["XSLT"],
  y: ["YOLO"],
  z: ["Zeno", "ZMO"]
};

const countLookup = {};

const Generator = ({ value }) => {
  if (value.length < 3) {
    return <div>{"..."}</div>;
  }

  const result = value
    .split("")
    .map(val => alphabetLookup[val])
    .reduce((accumulator, value) => {
      if (!value) return accumulator;
      countLookup[value] = (countLookup[value] || 0) + 1;
      return (accumulator += value[countLookup[value] % value.length] + " ");
    }, "");

  return <h1>{result}</h1>;
};

class HOC extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="name-input"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <Generator value={this.state.input.toLowerCase()} />
      </div>
    );
  }
}

const App = () => (
  <div style={styles}>
    <Hello name="" />
    <h2>Bullshit Stack Generator {"\u2728"}</h2>
    <p>{"Give an acronym, I give you a stack"}</p>
    <HOC />
  </div>
);

render(<App />, document.getElementById("root"));

// Go http://welovedevs.com
