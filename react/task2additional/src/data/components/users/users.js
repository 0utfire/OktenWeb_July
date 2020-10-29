import React, {Component} from 'react';
import {Apiservice} from "../../services/apiservice";
import User from "../user/user";

class Users extends Component {

    api = new Apiservice();

    state= {users: [], posts: []};

    async componentDidMount(){
        this.setState({users: await this.api.GetUsers()})
    }
    render() {
        return (
            this.state.users.map(user => (
                    <User user={user} key={user.id}/>
                    )
                )
        );
    }
}

export default Users;
