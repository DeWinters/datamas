import React, { Component } from 'react';

import axios from 'axios';
import '../App.css';

class DeleteGuest extends Component {

    handleSub(e){
        if(this.refs.id.value ===''){
            alert('Guest ID required');
        } else{
            axios({
                method: 'post',
                url: 'http://localhost:8080/deleteById',
                data: {
                    id: this.refs.id.value
                }
            });
        }
        e.preventDefault();

        this.refs.id.value = "";
    }

    render() {

        return (
            <div className="ComponentBody" >
                <div  className="ComponentHead">
                    <span>Delete Guest</span>
                </div>

                <form onSubmit={this.handleSub.bind(this)} >

                    <div>
                        <label>Guest ID </label>
                        <input type="text" ref="id" />
                    </div>

                    <input type="submit" value="Delete" />
                </form>
            </div>
        );
    }
}

export default DeleteGuest;