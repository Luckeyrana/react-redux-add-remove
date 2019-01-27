import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Home from "./components/pages/Home";
import AddData from "./components/pages/AddData";
import Information from "./components/pages/Information";
import NoMatch from "./components/pages/NoMatch";
import {Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
class App extends Component {
  render() {
      console.log(this.props)
    return (

        <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/addData"} component={AddData} />
            <Route exact path={"/information"} component={Information} />
            <Route component={NoMatch} />
        </Switch>

    );
  }
}

export default withRouter(connect()(App));
