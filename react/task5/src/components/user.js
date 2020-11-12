import React, {Component} from 'react';

class User extends Component {
    render() {
        const {user, getUserById} = this.props
        return (
            <div>
                {user.name}
                <button onClick={() => {getUserById(user.id)}}>Info</button>
            </div>
        );
    }
}

export default User;
