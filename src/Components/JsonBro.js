import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class JsonBro extends Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/gimmeJson').then(results => {
            this.setState({
                clients: results.data.results

            })
        })
    }

    render() {

        let Client = function (props) {
            return (
                <div className="user Ticket">
                    <div>{props.id} : {props.firstName} {props.lastName}</div>
                </div>
            )
        };



        return (
            <div className="ComponentBody">
                <div className="ComponentHead">
                    MySql Spring
                </div>
                <div>
                    {this.state.clients.map(function (client) {
                        return <Client guestId={client.id} firstName={client.firstName} lastName={client.lastName}key={client.id} />
                    })}
                </div>
            </div>
        )
    }
}

export default JsonBro;