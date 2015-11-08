import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, IndexRoute } from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory()

// Components
import Home from "Home/routes";
import Settings from "Settings/routes";
import Other from "Other/routes"

const App = React.createClass({
  render() {
    return <div>{this.props.children}</div>
  }
})

const rootRoute = {
  component: "div",
  childRoutes: [{
    path: "/",
    component: App,
    indexRoute: Home,
    childRoutes: [
      Settings,
      Other
    ]
  }]
}

ReactDOM.render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById("app")
)
