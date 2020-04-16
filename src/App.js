import React from "react";
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import City from "./pages/City";
import Map from "./pages/Map";
import NoMatch from "./pages/NoMatch";

// import { Button } from 'antd-mobile'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* <NavLink to="/home">首页</NavLink>
          <NavLink to="/city">城市</NavLink>
          <NavLink to="/map">地图</NavLink> */}
          <Switch>
            <Redirect exact from='/' to='/home'></Redirect>
            <Route path="/home" component={Home}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/map" component={Map}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
