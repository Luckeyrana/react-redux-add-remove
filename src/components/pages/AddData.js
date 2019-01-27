import React, {Component, Suspense} from "react";
import Header from "../header/Header";
import Layout from "../Layout";
import {withRouter} from "react-router-dom";
import AddDataForm from "../addDataForm/AddDataForm";
import ShowRemoveData from "../addDataForm/ShowRemoveData";

class AddData extends Component{
    render(){
        return(
            <Layout>
                <Header/>
                <div className="page-title">
                    <h1>Add Data Below</h1>
                </div>
                <div className="page">
                    <div className="wrap">
                        <div className="left">
                            <AddDataForm/>


                        </div>
                        <div className="right">

                            <ShowRemoveData/>
                        </div>
                    </div>
                </div>
            </Layout>

        )
    }

}

export default withRouter(AddData);