import React, { Component } from 'react';
import './App.css';
import Icon     from './images/flake.png';
import AllTrips from './Components/AllTrips';
import AddTrip  from './Components/AddTrip';
import History  from './Resources/allTrips';
import Inductor from './Components/Inductor';
import JsonBro from "./Components/JsonBro";

class App extends Component {
    constructor(){
        super();
        this.state ={
            allTrips: []
        }
    }

    componentWillMount() {
        this.setState({allTrips: History})
    }

    handleAddTrip(trip){
        let allTrips = this.state.allTrips;
        allTrips.push(trip);
        this.setState({allTrips:allTrips});
    }

  render() {

    return (
      <div className="App">

          <div className="App-header">
              <img src={Icon} className="App-logo" alt="logo" />
              DeWinters
          </div>

          <div className="Inductor">
              <Inductor />
          </div>

          <div className="Inductor">
                <JsonBro />
          </div>

          <AddTrip addTrip={this.handleAddTrip.bind(this)} />

          <AllTrips allTrips={this.state.allTrips} />



      </div>
    );
  }
}

export default App;
