import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./indexs.css";
// import App from './App';
// import AppsV2 from "./AppsV2";
import reportWebVitals from "./reportWebVitals";
import StarRating from "./StarRatng";
import TextExpander from "./TextExpander";

function Star() {
  const [outRating, setOutRating] = useState(0);

  return (
    <div>
      <StarRating setOutRating={setOutRating} />

      <p>This movie was rated {outRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <TextExpander>TODO</TextExpander> */}

    <App />

    {/* <AppsV2 /> */}

    {/* <StarRating message={["very bad", "bad", "good", "okay", "amazing"]} />

    <StarRating color="red" size={13} />

    <StarRating rating={10} size={26} />

    <Star /> */}
    {/* <StarRating rating={10} /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
