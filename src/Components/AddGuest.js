import React, { Component } from 'react';

import axios from 'axios';
import '../App.css';

class AddGuest extends Component {
    constructor(){
        super();
        this.state = {
            newGuest:{
                firstName: '',
               lastName: ''
            }
        }
    }





    handleSub(e){
        /*
        if(this.refs.lastName.value ===''){
            alert('Last Name required');
        } else {
            alert(this.refs.firstName.value);
            //this.setState({newGuest: {firstName: 'random', lastName: 'text'}});
            let request = new XMLHttpRequest();
            request.open('POST', 'http://localhost:8080/newGuest', true);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.send(this.refs.toJSON());

        }
        //alert('hello');
        */

        axios.post('http://localhost:8080/newGuest', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


        /*
        axios({
            method: 'post',
            url: 'http://localhost:8080/newGuest',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }
        });
        */

        /*
        if(this.refs.lastName.value ===''){
            alert('Last Name required');
        } else{
            this.setState({firstName: 'fake'});
            //this.props.newGuest(this.state.newGuest);
            axios.post('http://localhost:8080/newGuest', this.props.firstName.value);
            //console.log(this.state.newGuest.toString());
        }
action="http://localhost:8080/newGuest" method="post"  >
this.handleSub.bind(this)
        */

        e.preventDefault();
    }

    render() {

        return (
            <div className="ComponentBody" >
                <div  className="ComponentHead">
                    <span>Add Guest</span>
                </div>

                <form name="myform" onSubmit={this.handleSub.bind(this)} >

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