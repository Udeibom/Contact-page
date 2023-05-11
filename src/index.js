import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Contacts from "./contacts";

ReactDOM.render(
  <div>
    <App
      name={Contacts[0].name}
      img={Contacts[0].imgURL}
      tel={Contacts[0].phone}
      email={Contacts[0].email}
    />
    <App
      name={Contacts[1].name}
      img={Contacts[1].imgURL}
      tel={Contacts[1].phone}
      email={Contacts[1].email}
    />
    <App
      name={Contacts[2].name}
      img={Contacts[2].imgURL}
      tel={Contacts[2].phone}
      email={Contacts[2].email}
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
