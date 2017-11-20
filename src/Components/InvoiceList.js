import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Invoice from './Invoice';

class InvoiceList extends Component {

    constructor() {
        super();
        this.state = {
            invoices: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/getActivesList').then(results => {
            this.setState({
                invoices: results.data
            })
        })
    }

    render() {

        return (
            <div className="ComponentBody InvoiceList">
                <div className="ComponentHead">
                    MySql Spring
                </div>

                {this.state.invoices.map(function (invoice) {
                    return <Invoice key={invoice.id}
                                        id={invoice.id}
                                        invoice_num={invoice.invoice_num}
                                        client={invoice.client}
                                        driver={invoice.driver}
                                        origin={invoice.origin}
                                        collection={invoice.collection}
                                        destination={invoice.destination}
                                        delivery={invoice.delivery}
                                        tarif={invoice.tarif}
                                        tax_rate={invoice.tax_rate}
                                        wait_fee={invoice.wait_fee}
                                        retour={invoice.retour}
                                        wknd={invoice.wknd}
                                        human={invoice.human}
                                        prise={invoice.prise}
                                        interne={invoice.interne}
                                        abusive={invoice.abusive}
                                        urgent={invoice.urgent}
                                        active={invoice.active}
                                        paid={invoice.paid}/>
                    })
                }

            </div>
        )
    }
}
export default InvoiceList;
