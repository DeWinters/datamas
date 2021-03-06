import React, { Component } from 'react';

import axios from 'axios';
import '../App.css';

class AddGuest extends Component {

    handleSub(e){
        if(this.refs.lastName.value ===''){
            alert('Last Name required');
        } else{
            axios({
                method: 'post',
                url: 'http://localhost:8080/newGuest',
                data: {
                    firstName: this.refs.firstName.value,
                    lastName: this.refs.lastName.value
                }
            });
        }
        e.preventDefault();

        this.refs.firstName.value = "";
        this.refs.lastName.value = "";
    }

    render() {

        return (
            <div className="ComponentBody" >
                <div  className="ComponentHead">
                    <span>Add Guest</span>
                </div>

                <form onSubmit={this.handleSub.bind(this)} >

                    <div>
                        <label>First Name </label>
                        <input type="text" ref="firstName" />
                    </div>

                    <div>
                        <label>Last Name </label>
                        <input type="text" ref="lastName" />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddGuest;