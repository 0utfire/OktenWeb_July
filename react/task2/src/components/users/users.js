import React, {Component} from 'react';
import {ApiService} from "../../services/ApiService";
import User from "../user/user";

class Users extends Component {
    api = new ApiService();

    state= {users: []};

    async componentDidMount(){
        this.setState({users: await this.api.GetUsers()})
    }

    render() {
        return (
                this.state.users.map(user => (
                <User user={user} key={user.id}/>)
                )
    )
    }
}

export default Users;
