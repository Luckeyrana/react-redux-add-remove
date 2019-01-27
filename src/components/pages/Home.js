import React, {Component,lazy,Suspense} from "react";
import Header from "../header/Header";
import Layout from "../Layout";
import {withRouter} from "react-router-dom";
const  InfoList = lazy(()=>import("../InfoList/InfoList"));

class Home extends Component{

    render(){
        return(

            <Layout>
                <Header/>
                <div className="page-title">
                    <h1>Welcome to our home page:</h1>
                </div>
                <div className="page">
                    <Suspense fallback={<div>Loading...</div>}>
                        <InfoList/>
                    </Suspense>
                </div>

            </Layout>

        )
    }
}

export default withRouter(Home);