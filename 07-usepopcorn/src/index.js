import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./Components/StarRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <>
      <div>This movie was rated {movieRating} stars</div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
    </>
  );
}

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

    <Test />
  </React.StrictMode>
);
