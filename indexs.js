cc;
//import App from "./App";
//import StarRating from "./StarRating";
import Popcorn from "./Popcorn";

import reportWebVitals from "./reportWebVitals";
/*
function Test() {
  const [isExpanded, setIsExpanded] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onClick={setIsExpanded} />

      <p>This movie was rated {isExpanded} stars </p>
    </div>
  );
}
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<StarRating />*/}

    <Popcorn />

    {/* <App />*/}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating />
    <StarRating maxRating={15} />
    <StarRating
      maxRating={15}
      size={20}
      color="red"
      className="test"
      defaultRating={3}
    />

    <Test /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
