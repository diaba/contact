import React from "react";
import Contacts from "./data";
import "./index.css";

function contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="img" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={props.img} alt="img" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={props.img} alt="img" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
function App(props) {
  return Contacts.map((c) => contact(c));
}

//   books.map((book) => feature(book));

export default App;
