import "./App.css";
import Home from "./home";
import Login from "./components/login";
import SignUp from "./components/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/login" component={Login}></Route>
          <Home />
        </Switch>
      </Router>
    </>
  );
}
export default App;
