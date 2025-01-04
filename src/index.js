import React, { useState } from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./indexs.css";
// import App from "./App";
import App from "./App-v1";
// import AppsV2 from "./AppsV2";
import reportWebVitals from "./reportWebVitals";
// import StarRating from "./StarRatng";
// import TextExpander from "./T1extExpander";

// function Star() {
//   const [outRating, setOutRating] = useState(0);

//   return (
//     <div>
//       <StarRating setOutRating={setOutRating} />

//       <p>This movie was rated {outRating} stars</p>
//     </div>
//   );
// }

function TextExpander() {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <TextExpander>
        {isOpen && (
          <p>
            Space travel is the ultmate adventure! imagne soarng past the stars
            and expoloring new worlds. it's the stuff of dreams and scence
            fiction, but believe t or not, space travel is a rreal thing. Humans
            and robots are constantly venturing into the cosmos to uncover its
            secerets and push the boundraes odf what's possible.
          </p>
        )}
      </TextExpander>

      <TextExpander>
        Space travels require some seriously amazing technology and colaboration
        between counties, private companies, and international space
        organizations, And while it's not always easy or (or cheap), the results
        are out of this world. Thn about the frst time Humans stepped foot on
        the Moon or wen rovers were sent to roam around Mars.
      </TextExpander>

      <TextExpander>
        Space missions has gven us incredible insights into our universe and
        have inspired future generations to keep reaching for the Stars. SPace
        tavel a pretty cool thing to think about. Wo knows what we wll discover
        next!
      </TextExpander>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <TextExpander /> */}
    {/* <App /> */}
    <App />
    {/* <AppsV2 /> */}
    {/* <StarRating message={["very bad", "bad", "good", "okay", "amazing"]} />

    <StarRating color="red" size={13} />

    <StarRating rating={10} size={26} />

    <Star /> */}
    {/* <StarRating rating={10} /> */}
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
