import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
          {/*good practice to have a set of parenthesis in returning a value*/}
          {emojipedia.map(emoji => (
              <Entry key={emoji.id} name={emoji.name} img={emoji.emoji} desc={emoji.meaning}/>
          ))}
      </dl>
    </div>
  );
}

export default App;
