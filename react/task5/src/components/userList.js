import React, {Component} from 'react';
import User from "./user";

class UserList extends Component {
    render() {
        let {users, getUserById} = this.props
        return (
            <div>
                {
                    users.map(user => (<User user={user} getUserById={getUserById}/>))
                }

            </div>
        );
    }
}

export default UserList;
