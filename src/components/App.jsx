import React from "react";

function App(props) {
  return (
    <div>
      <h1 className="heading">{props.heading}</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img src={props.img} alt="avatar_img" className="circle-img" />
        </div>
        <div className="bottom">
          <p className="info">{props.tel}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
