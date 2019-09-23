import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

const greeting = (<h1 className="heading">Say hello to ReactJS!</h1>);

const imgSrc = "images/react-logo.svg";

const myStyle = {
  height: "200px"
};

const element = (
  <div>

  <section className="top">
    <img src="images/ironhack-logo.svg"></img>
    <img src="images/menu-top.svg"></img>
  </section>

  <section className="first">

    {greeting}
    <p
      style={{
        color: "white"
      }}
    >
    You will learn a Frontend framework from scratch, to become a Ninka Developer
    </p>
    <button
    style=
    {{backgroundColor: "white",
    padding: "40px",
    fontSize: "20px",
    color:"#1F2535"
    }}
    >Awesome!</button>
  </section>
  <section className="second">
  <img src="/images/icon1.png"></img>
  <h3>Declarative</h3>
  <p>React makes it painless to create interactive UIs.</p>
  <img src="/images/icon2.png"></img>
  <h3>Componnents</h3>
  <p>Build encapsulated components that manage their state.</p>
  <img src="/images/icon3.png"></img>
  <h3>Single-Way</h3>
  <p>A set of immutable values are passed to theri components.</p>
  <img src="/images/icon4.png"></img>
  <h3>JSX</h3>
  <p>Statically typed, designed to run on modern browsers.</p>
  </section>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
