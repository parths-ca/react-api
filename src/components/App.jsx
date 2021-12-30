import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }

  function api() {
    const url = "https://api.shrtco.de/v2/";
    const result = name;
    const name = fetch(url);
  }

  return (
    <div className="container">
      <h1>Welcome</h1>
      <img
        className="img"
        alt="weblink"
        src="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555301722/shape/mentalfloss/unknown-link-primary.png"
      />

      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Please enter a link here"
          value={name}
        />
        <h2>{headingText}</h2>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
