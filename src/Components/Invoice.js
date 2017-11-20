import React, { Component } from 'react';
import '../App.css';

class Invoice extends Component {
    render() {
        return (
            <div className="Ticket" >
                <span>Id :{this.props.id}</span><br/>
                <span>Invoice: {this.props.invoice_num} </span><br/>
                <span>Client: {this.props.client}</span><br/>
                <span>Driver: {this.props.driver}</span><br/>
                <span>Origin: {this.props.origin}</span><br/>
                <span>Collection: {this.props.collection}</span><br/>
                <span>Destination: {this.props.destination}</span><br/>
                <span>Delivery: {this.props.delivery}</span><br/>
                <span>Tarif: {this.props.tarif}</span><br/>
                <span>Tax%: {this.props.tax_rate}</span><br/>
                <span>Wait Fee: {this.props.wait_fee}</span><br/>
                <span>Retour: {this.props.retour}</span><br/>
                <span>Wknd: {this.props.wknd}</span><br/>
                <span>Human: {this.props.human}</span><br/>
                <span>Prise: {this.props.prise}</span><br/>
                <span>Interne: {this.props.interne}</span><br/>
                <span>Abusive: {this.props.abusive}</span><br/>
                <span>Urgence: {this.props.urgent}</span><br/>
                <span>Active: {this.props.active}</span><br/>
                <span>Paid: {this.props.paid}</span><br/>
            </div>
        );
    }
}
export default Invoice;

