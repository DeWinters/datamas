import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
//import AllDrivers from '../Resources/allDrivers';
//import Checkbox from 'muicss/lib/react/checkbox';

class InvoiceCreator extends Component {
    constructor(){
        super();
        this.state = {
            invoice:{},
            clients:[],
            drivers:[],
            locations:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/getClientList').then(results => {
            this.setState({
                clients: results.data
            })
        });
        axios.get('http://localhost:8080/getDriverList').then(results => {
            this.setState({
                drivers: results.data
            })
        });
        axios.get('http://localhost:8080/getLocationList').then(results => {
            this.setState({
                locations: results.data
            })
        });
    }

    static defaultProps = {
        //clients:this.state.clients
    };

    handleSubmit(e){
        if(this.refs.invoice_num.value ===''){
            alert('Last Name required');
        } else{
            axios({
                method: 'post',
                url: 'http://localhost:8080/newInvoice',
                data: {
                        invoice_num: this.refs.invoice_num.value,
                        client: this.refs.client.value,
                        driver: this.refs.driver.value,
                        origin: this.refs.origin.value,
                        collection: this.refs.collection.value,
                        destination: this.refs.destination.value,
                        delivery: this.refs.delivery.value,
                        tarif: this.refs.tarif.value,
                        tax_rate: this.refs.tax_rate.value,
                        wait_fee: this.refs.wait_fee.value,
                        retour: this.refs.retour.checked,
                        wknd: this.refs.wknd.checked,
                        human: this.refs.human.checked,
                        prise: this.refs.prise.checked,
                        interne: this.refs.interne.checked,
                        abusive: this.refs.abusive.checked,
                        urgent: this.refs.urgent.checked,
                        active: this.refs.active.checked,
                        paid: this.refs.paid.checked
                }
            });
        }
        e.preventDefault();

        this.refs.invoice_num.value = "";
        this.refs.client.value = "";
        this.refs.driver.value = "";
        this.refs.origin.value = "";
        this.refs.collection.value = "";
        this.refs.destination.value = "";
        this.refs.delivery.value = "";
        this.refs.tarif.value = "";
        this.refs.tax_rate.value = "";
        this.refs.wait_fee.value = "";
        this.refs.retour.checked =false;
        this.refs.wknd.checked =false;
        this.refs.human.checked =false;
        this.refs.prise.checked =false;
        this.refs.interne.checked =false;
        this.refs.abusive.checked =false;
        this.refs.urgent.checked =false;
        this.refs.active.checked =true;
        this.refs.paid.checked =false;
    }

    render() {
        let clientOptions = this.state.clients.map(client =>{
            return <option key={client.id} value={client.name}>{client.name}</option>
        });

        let driverOptions = this.state.drivers.map(driver =>{
            return <option key={driver.id} value={driver.lastName}>{driver.firstName} {driver.lastName}</option>
        });

        let locationOptions = this.state.locations.map(location =>{
            return <option key={location.id} value={location.name}>{location.name}</option>
        });

        return (
            <div className="ComponentBody" >
                <div  className="ComponentHead">
                    <span>New Invoice</span>
                </div>

                <form className="Creator" onSubmit={this.handleSubmit.bind(this)}>

                    <label>Invoice </label>
                    <input type="text" ref="invoice_num" id="invoice_num"/>

                    <label>Client </label>
                    <select ref="client" id="client" >{clientOptions}</select>

                    <label>Driver </label>
                    <select ref="driver" id="driver" >{driverOptions}</select>

                    <label>Origin </label>
                    <select ref="origin" id="origin" >{locationOptions}</select>

                    <label>Start Time </label>
                    <input type="datetime-local" ref="collection" id="collection" />

                    <label>Destination </label>
                    <select ref="origin" id="origin" >{locationOptions}</select>

                    <label>End Time  </label>
                    <input type="datetime-local" ref="delivery" id="delivery"  />

                    <label>Tarif </label>
                    <input type="text" ref="tarif" id="tarif" />

                    <label>Tax% </label>
                    <input type="text" ref="tax_rate" id="tax_rate"/>

                    <label>Wait Fee </label>
                    <input type="text" ref="wait_fee" id="wait_fee"/>

                    <label>Retour</label>
                    <input type="checkbox" ref="retour" id="retour" />

                    <label>Weekend</label>
                    <input type="checkbox" ref="wknd" id="wknd" />

                    <label>Human</label>
                    <input type="checkbox" ref="human" id="human"/>

                    <label>Prise</label>
                    <input type="checkbox" ref="prise" id="prise" />

                    <label>Interne</label>
                    <input type="checkbox" ref="interne" id="interne" />

                    <label>Abhusive</label>
                    <input type="checkbox" ref="abusive" id="abusive" />

                    <label>Urgence</label>
                    <input type="checkbox" ref="urgent" id="urgent" />

                    <label>Active</label>
                    <input type="checkbox" ref="active" id="active" defaultChecked={true} />

                    <label>Paid</label>
                    <input type="checkbox" ref="paid" id="paid" />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default InvoiceCreator;
