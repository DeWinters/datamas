import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class Inductor extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://swapi.co/api/people').then(results => {
            this.setState({
                users: results.data.results
            })
        })
    }

    render() {

        let User = function (props) {
            return (
                <div className="user Ticket">
                    <div>{props.rank + 1} : {props.name}</div>
                </div>
            )
        }

        return (
            <div className="ComponentBody">
                <div className="ComponentHead">
                    External API Inductor
                </div>
                <div>
                    {this.state.users.map(function (user, i) {
                        return <User rank={i} name={user.name} key={user.name} />
                    })}
                </div>
            </div>
        )
    }
}

export default Inductor;