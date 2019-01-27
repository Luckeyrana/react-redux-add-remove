import React from "react";
import axios from "axios";

class InfoList extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            persons: [],
        }
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const persons = res.data;

                this.setState({ persons:[...persons] });
            })
    }
    render() {
        return (
            <ul className={'detail-list'}>
                {this.state.persons.map(person => <li key={person.id}>
                    <p><strong>User ID: </strong>{person.userId}</p>
                    <p><strong>Title: </strong>{person.title}</p>
                    <p><strong>ID: </strong>{person.id}</p>
                    <p><strong>Completed: </strong>{person.completed? "Yes" : "No"}</p>
                </li>)}
            </ul>
        );
    }

}

export default InfoList;