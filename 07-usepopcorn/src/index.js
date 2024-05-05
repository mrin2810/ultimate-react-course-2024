import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./Components/StarRating";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Worst", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={5}
    />
    <StarRating size={27} color="red" defaultRating={3} />
  </React.StrictMode>
);
