import React, {Component} from "react";
import Layout from "../Layout";
import {withRouter} from "react-router-dom";

class NoMatch extends Component{
    render(){
        return(
            <Layout>
                <h3>Page not found: 404 Error</h3>
            </Layout>
        )

    }
}

export default withRouter(NoMatch);