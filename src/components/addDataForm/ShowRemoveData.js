import {Component} from "react";
import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {DELETE_DATA_FORM} from "../../redux/Actions/Actions";

class ShowRemoveData extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log('props is:', this.props.data)
    }

    deleteRow = (name) => {
        this.props.dispatch({type: DELETE_DATA_FORM, name: name})
    };

    render() {
        return (
            <ul className={'list-data'}>

                {this.props.data.map((obj, i) => (
                    <li key={i}>
                        <div  className={'data'}>
                            <span><b>name </b><span>{obj.name}</span></span>
                            <span > <b >department </b><span>{obj.department}</span></span></div>
                        <button  onClick={() => this.deleteRow(obj.name)}>X</button>
                    </li>
                ))}
            </ul>
        )

    }

}

const mapStateToProps = (state) => {
    return {data: state.formData}
};

ShowRemoveData.propType = {
    data: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ShowRemoveData);