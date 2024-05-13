import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import Links from "./Links";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} links={user.links} />
      <Links linkedin={"https://www.linkedin.com/in/liza/"} github={"https://github.com/liza"} />
    </div>
  );
}

export default App;
