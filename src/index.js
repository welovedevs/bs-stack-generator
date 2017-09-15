import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import {
  BrowserRouter as Router,
  Route,
	Switch,
	Redirect
} from 'react-router-dom'

import "./style.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const alphabetLookup = {
  a: ["AWS", "Angular", "Ada", "ASP.net", "Angular 1.6", "Arduino", "Android", "Algolia"],
  b: ["Bootstrap","Basic", "bash", "Brainfuck"],
  c: ["CleverCloud", "C#", "C++", "Clojure", "Coq", "Cobol", "CSS3"],
  d: ["Dart", "Delphi"],
  e: ["Elixir", "Express", "Eiffel", "Erlang", "Ecmascript", "ElasticSearch"],
  f: ["Falcon", "Flow", "Firebase", "Fortran"],
  g: ["Guava", "Go", "Groovy"],
  h: ["Haskell", "Haxe", "Heroku", "HTML5"],
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
  s: ["Scala", "SmallTalk", "Swift", "Serverless", "Sendgrid", "Stripe"],
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

  return (
		<div>
			<h1>{result}</h1>
			<Redirect to={"/" + value} />
	  </div>);
};

class HOC extends Component {
  constructor(props) {
    super(props);
    this.state = { input: props.match.params.entry ||  "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ input: event.target.value });
		this.props.location.pathname = `\${event.target.value}`
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
	<Router>
		  <div style={styles}>
		    <Hello name="Stackronym" />
		    <h2>Bullshit Stack Generator {"\u2728"}</h2>
		    <p>{"Give an acronym, I give you a stack"}</p>
				<Switch>
					<Route
						path="/:entry"
						component={HOC}
						/>
					<Route
						component={HOC}
						/>
				</Switch>
		  </div>
	</Router>
)

render(<App />, document.getElementById("root"));

// Go http://welovedevs.com
