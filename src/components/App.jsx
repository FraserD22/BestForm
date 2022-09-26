import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    event.preventDefault();
  }
  function onMouseOver() {
    setMouseOver(true);
  }
  function onMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleChange}>
        <input
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "yellow" }}
          type="submit"
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
