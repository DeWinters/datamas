import React, { Component } from 'react';
import './App.css';
import Icon     from './images/flake.png';
//import AllTrips from './Components/AllTrips';
//import AddTrip  from './Components/AddTrip';
import History  from './Resources/allTrips';
//import Inductor from './Components/Inductor';
import JsonBro from "./Components/JsonBro";
import AddGuest from "./Components/AddGuest";

class App extends Component {
    constructor(){
        super();
        this.state ={
            //allTrips: []
            allGuests: []
        }
    }

    componentWillMount() {
        this.setState({allTrips: History})
    }
/*
    handleAddTrip(trip){
        let allTrips = this.state.allTrips;
        allTrips.push(trip);
        this.setState({allTrips:allTrips});
    }
*/

    handleSubmit(guest){
        let allGuests = this.state.allGuests;
        allGuests.push(guest);
        this.setState({allGuests:allGuests});
    }

  render() {

    return (
      <div className="App">

          <div className="App-header">
              <img src={Icon} className="App-logo" alt="logo" />
              DeWinters
          </div>

          <div>
              <AddGuest addGuest={this.handleSubmit.bind(this)} />
          </div>

          <div className="JsonBro">
              <JsonBro />
          </div>



      </div>
    );
  }
}

export default App;

/* Mothballs
        <div className="Cloaked">
            <Inductor />
        </div>

        <div className="Paneled Cloaked">
            <!--AddTrip addTrip={this.handleAddTrip.bind(this)} / -->
            <!--AllTrips allTrips={this.state.allTrips} / -->
        </div>
          */

