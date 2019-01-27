import React from "react";
import "./layout.css";
class Layout extends React.Component{
    render() {
        return (

            <main className={'main'}>
                {this.props.children}
            </main>

        );
    }

}

export default Layout;