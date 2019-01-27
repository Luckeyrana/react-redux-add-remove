import React, {Component} from "react";
import Header from "../header/Header";
import Layout from "../Layout";
import {withRouter} from "react-router-dom";
import ShowRemoveData from "../addDataForm/ShowRemoveData";
import InfoList from "../InfoList/InfoList";
import AddDataForm from "../addDataForm/AddDataForm";

class Information extends Component{
    render(){
        return(

            <Layout>
                <Header/>
                <div className="page-title">
                    <h1>Information</h1>
                </div>
                <div className="page">
                    <div className="wrap">
                        <div className="left" style={{flex:'1 60%'}}>
                           <InfoList/>
                        </div>
                        <div className="right" style={{flex:'1 40%',borderLeft:'1px solid rgba(0,0,0,0.2)'}}>
                            <h4 style={{textAlign:'center', color:'rgba(0,0,0,0.5)'}}>Info from add data</h4>
                            <ShowRemoveData/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withRouter(Information);