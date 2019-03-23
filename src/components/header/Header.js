import React, { Component} from "react";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {NavLink, withRouter} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <header>
            <nav className={"nav"}>
                <ul>
                    <li><NavLink activeClassName={'active'}  to={"/home"}><FontAwesomeIcon  icon={faHome} /></NavLink></li>
                    <li><NavLink activeClassName={'active'} to={"/home"}> Home</NavLink></li>
                    <li><NavLink activeClassName={'active'} to={"/addData"}>Add Data</NavLink></li>
                    <li><NavLink activeClassName={'active'} to={"/information"}>Information</NavLink></li>
                    <li><NavLink activeClassName={'active'} to={"/contactUs"}>Contact Us</NavLink></li>
                </ul>

            </nav>
            </header>
        )
    }

}


export default withRouter(Header);