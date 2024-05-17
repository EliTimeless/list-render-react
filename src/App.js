import React from "react";
import list from "./List";
import Names from "./Names";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Watch the Grey's Anatomy</h1>
      {list.length > 0 ? (
        <Names
          nameOne={list[0].name}
          imageOne={list[0].img}
          nameTwo={list[1].name}
          imageTwo={list[1].img}
          nameThree={list[2].name}
          imageThree={list[2].img}
        />
      ) : (
        "list is empty"
      )}
    </div>
  );
}

export default App;

/*
List Rendering:
Create a React component that renders a list of names. 
Use an array of strings to store the names. 
Render the list using the map function and arrow function syntax.
 Use ternary operators to display a message if the list is empty.*/
