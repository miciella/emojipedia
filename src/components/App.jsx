import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";


function createDic(emoji){
    return (
        <Entry
            key={emoji.id}
            name={emoji.name}
            img={emoji.emoji}
            desc={emoji.meaning}
        />
    );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
          {emojipedia.map(createDic)}
      </dl>
    </div>
  );
}

export default App;
