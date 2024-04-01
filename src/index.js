import React from "react";
import ReactDOM from "react-dom/client";
import Dog from "./components/Dog";
import "./components/index.css";

function App() {
  var images = [
    "https://i.imgur.com/akqfEFy.jpeg",
    "https://i.imgur.com/Gm8TJF4.jpeg",
    "https://i.imgur.com/IR8ScZC.jpeg",
    "https://i.imgur.com/GnW6ysb.png",
  ];

  var images2 = [
    "https://i.imgur.com/IR8ScZC.jpeg",
    "https://i.imgur.com/Gm8TJF4.jpeg",
    "https://i.imgur.com/GnW6ysb.png",
    "https://i.imgur.com/akqfEFy.jpeg",
  ];

  var massage = [
    "Julie's Rabbit Ears",
    "The Innocent Look",
    "Big Eyed Buggy",
    "The Saint Doggo",
  ];

  var massage2 = [
    "Big Eyed Buggy",
    "The Innocent Look",
    "The Saint Doggo",
    "Julie's Rabbit Ears",
  ];

  var map = images.map(function (items, index) {
    return (
      <div className="dog-name">
        <Dog img={items} msg={massage[index]} />
      </div>
    );
  });

  var map2 = images2.map(function(ites,ind)
  {
    return (
      <div>
        <Dog img={ites} msg={massage2[ind]}/>
      </div>
    )
  })

  return <div><div>{map}</div><div>{map2}</div></div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="dog-flex" style={{ display: "flex" }}>
    <App />
  </div>
);
