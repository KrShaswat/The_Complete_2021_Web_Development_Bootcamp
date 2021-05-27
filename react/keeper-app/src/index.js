import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Bouncy"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="John James Rambo"
      img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/John_Rambo.jpg/250px-John_Rambo.jpg"
      tel="Need to know"
      email="havenomail@rambo.com"
    />
  </div>,
  document.getElementById("root")
);
