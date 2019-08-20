import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

// const HomePage = props => {
//   console.log(props);
//   return (
//     <div>
//       <Link to="/topics">Topics</Link>
//       <h1>Homepage</h1>
//     </div>
//   );
// };

// const TopicsList = props => {
//   console.log(props);
//   // See History -- props.match.url allows for nested url access
//   return (
//     <div>
//       <h1>TopicsList</h1>
//       <Link to={`${props.match.url}/13`}>To topic 13</Link>
//       <Link to={`${props.match.url}/17`}>To topic 17</Link>
//       <Link to={`${props.match.url}/21`}>To topic 21</Link>
//     </div>
//   );
// };

// const TopicDetail = props => {
//   console.log(props);
//   return (
//     <div>
//       <h1>TopicDetail</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
