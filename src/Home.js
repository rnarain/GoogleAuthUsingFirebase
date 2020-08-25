import React, { Component } from 'react';
import {auth} from './config/firebase';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    logout=(e)=> {
        e.preventDefault();
        auth.signOut();
    }

    render() {
        return (
        <div className="my-container">
             <h1>Welcome to home</h1>
        <button type="button" class="btn btn-danger my-button" onClick={this.logout}>Logout</button>
        </div>      
        );

    }

}

export default Home;