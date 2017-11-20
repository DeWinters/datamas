import React, { Component } from 'react';
import './App.css';
import Icon     from './images/flake.png';
//import AllTrips from './Components/AllTrips';
//import AddTrip  from './Components/AddTrip';
//import History  from './Resources/allTrips';
//import Inductor from './Components/Inductor';
//import axios from 'axios';
/*
import JsonBro from "./Components/JsonBro";
import AddGuest from "./Components/AddGuest";
import DeleteGuest from './Components/DeleteGuest';
import UpdateGuest from './Components/UpdateGuest';
*/
import InvoiceList from './Components/InvoiceList';
import InvoiceCreator from './Components/InvoiceCreator';

class App extends Component {

    constructor(){
        super();
        this.state ={
            invoices: []
            //allTrips: [],
            //clients: {},
            //key : 1
        }
    }


    componentWillMount() {
        //this.setState({invoices: InvoiceList})
        //this.setState({key : Math.random()});

        /*
        axios.get('http://localhost:8080/gimmeJson').then(results => {
            this.setState({
                clients: results.data
            })
        })
        */
        //this.setState({allTrips: History})
        //this.setState({allGuests: JsonBro})
        //alert(this.state.key);
    }

    componentWillReceiveProps(){
        //this.setState({key : this.props.key +1});
    }

    /*
    handleAddTrip(trip){
        let allTrips = this.state.allTrips;
        allTrips.push(trip);
        this.setState({allTrips:allTrips});
    }
    */


    //handleSubmit(invoice){
        //let allInvoices = this.state.invoices;
        //allInvoices.push(invoice);
        //this.setState({invoices:allInvoices});

        //forceUpdate(JsonBro);
        //JsonBro.forceUpdate;
        //JsonBro

        /*
        let key = this.state.key;
        key++;
        this.setState({key:key});
        */

        //this.componentWillReceiveProps();
        //this.props.key = Math.random()
        //this.state.key = Math.random();
        //this.setState({key : this.props.key +1});
        //let allGuests = this.state.allGuests;
        //allGuests = JsonBro;
        //this.setState({allGuests:allGuests});
   // }

  render() {

    return (
      <div className="App">

          <div className="App-header">
              <img src={Icon} className="App-logo" alt="logo" />
              MAS
          </div>

          <div className="Creator">
              <InvoiceCreator />
          </div>

          <div className="InvoiceList">
              <InvoiceList key={this.props.key}/>
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


        <div>
              <AddGuest onSubmit={this.handleSubmit()} />
          </div>

          <div>
              <UpdateGuest />
          </div>

          <div>
              <DeleteGuest />
          </div>

          <div className="JsonBro">
              <JsonBro key={this.props.key}/>
          </div>

*/

