import React, { Component } from 'react';
import '../App.css';

class Trip extends Component {

    render() {

        return (
            <div className="Ticket" >
                <span>Driver :{this.props.trip.driver}</span><br/>
                <span>From :{this.props.trip.pickup} </span>
                <span>{this.props.trip.start}</span><br/>
                <span>To :{this.props.trip.dropoff}</span>
                <span>{this.props.trip.end}</span><br/>
                <span>Luggage :{this.props.trip.luggage} items</span><br/>
            </div>
        );
    }
}

export default Trip;
