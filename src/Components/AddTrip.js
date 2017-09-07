import React, { Component } from 'react';
import '../App.css';
import AllDrivers from '../Resources/allDrivers';

class AddTrip extends Component {
    constructor(){
        super();
        this.state = {
            newTrip:{}
        }
    }

    static defaultProps = {
        drivers:AllDrivers
    };

    handleSubmit(e){
        if(this.refs.pickup.value ===''){
            alert('Driver required');
        } else{
            this.setState({newTrip:{
                driver: this.refs.driver.value,
                pickup: this.refs.pickup.value,
                start: this.refs.start.value,
                dropoff: this.refs.dropoff.value,
                end: this.refs.end.value,
                luggage: this.refs.luggage.value
            }}, function(){
                this.props.addTrip(this.state.newTrip);
            });
        }
        e.preventDefault();
    }

    render() {
        let driverOptions = this.props.drivers.map(driver =>{
            return <option key={driver.id} value={driver}>{driver.driver}</option>
        });

        return (
            <div className="ComponentBody" >
                <div  className="ComponentHead">
                    <span>Add Trip</span>
                </div>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Driver </label>
                        <select ref="driver" >
                            {driverOptions}
                        </select>
                    </div>
                    <div>
                        <label>Pickup Point </label>
                        <input type="text" ref="pickup" />
                    </div>
                    <div>
                        <label>Start Time </label>
                        <input type="datetime-local" ref="start" />
                    </div>
                    <div>
                        <label>Destination </label>
                        <input type="text" ref="dropoff" />
                    </div>
                    <div>
                        <label>End Time  </label>
                        <input type="datetime-local" ref="end" />
                    </div>
                    <div>
                        <label>Bags</label>
                        <input type="text" ref="luggage"  />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddTrip;