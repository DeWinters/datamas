import React, { Component } from 'react';

import axios from 'axios';
import '../App.css';

class UpdateGuest extends Component {

    handleSub(e){
        if(this.refs.id.value ===''){
            alert('Guest ID required');
        } else{
            axios({
                method: 'post',
                url: 'http://localhost:8080/updateGuest',
                data: {
                    id: this.refs.id.value,
                    firstName: this.refs.firstName.value,
                    lastName: this.refs.lastName.value
                }
            });
        }
        e.preventDefault();

        this.refs.id.value = "";
        this.refs.firstName.value = "";
        this.refs.lastName.value = "";
    }

    render() {

        return (
            <div className="ComponentBody" >
                <div  className="ComponentHead">
                    <span>Update Guest</span>
                </div>

                <form onSubmit={this.handleSub.bind(this)} >
                    <div>
                        <label>Guest ID </label>
                        <input type="text" ref="id" />
                    </div>

                    <div>
                        <label>First Name </label>
                        <input type="text" ref="firstName" />
                    </div>

                    <div>
                        <label>Last Name </label>
                        <input type="text" ref="lastName" />
                    </div>

                    <input type="submit" value="update" />
                </form>
            </div>
        );
    }
}

export default UpdateGuest;