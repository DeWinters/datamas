import React, { Component } from 'react';
import '../App.css';
import Trip from './Trip';

class AllTrips extends Component {

    render() {

        let history;
        if(this.props.allTrips){
            history= this.props.allTrips.map(trip => {
                return(
                    <Trip key={trip.driver} trip={trip} />
                );
            })
        }

        return (
            <div className="ComponentBody" >
                <div className="ComponentHead">
                     Local .json AllTrips(append(addTrip))
                </div>
                <span>
                    {history}
                </span>
            </div>
        );
    }
}

export default AllTrips;
