import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  console.log(`props: ${props}`)
  function bioProps() {
    if (props.bio) {
      return <p>{props.bio}</p>;
    } else  if (props.bio === "") {
      return null;
    } else {
      return null;
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <div>{bioProps()}</div>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
