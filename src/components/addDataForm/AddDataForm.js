import React, {Component} from "react";
import { connect } from "react-redux";
import {ADD_DATA_FORM} from "../../redux/Actions/Actions";
class AddDataForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {}
        };

        this.handleInput = this.handleInput.bind(this);


    };

    handleInput = (e) => {
        const formData = this.state.data;
        formData[e.target.name]= e.target.value;
        this.setState(
            formData,
        )
    };


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch({type:ADD_DATA_FORM,payload:this.state.data})
        //alert(JSON.stringify(this.state.data))
    };


    render() {
        return (

            <div className={'add-form-data'}>
                <form onSubmit={this.submitForm}>
                    <input type={"text"} defaultValue={''} name={"name"} placeholder={"Enter name"}
                           onChange={this.handleInput}/> <br/>
                    <input  type={"text"} defaultValue={''} name={"department"} placeholder={"Enter department"}
                           onChange={this.handleInput}/> <br/>
                    <button  type={"submit"}>Submit</button>
                </form>

            </div>

        )
    }
}

export default connect()(AddDataForm);
