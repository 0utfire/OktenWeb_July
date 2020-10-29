import React, {Component} from 'react';

class User extends Component {
    render() {
        let {id, name, username} = this.props.user;
        return (
            <div>
                {id} - {name}
            </div>
        );
    }
}

export default User;
