import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/signinup/signinup.component';
import './App.css';

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
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
