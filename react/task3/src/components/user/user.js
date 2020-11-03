import React, {Component} from 'react';

class User extends Component {
    user = this.props.user
    render() {
        let {id, name} = this.props.user;
        return (
            <div>
                {
                    (Object.keys(this.user).length === 0) && ('Enter User ID')
                }
                {
                    (Object.keys(this.user).length !== 0) && (`${id} - ${name}`)
                    // (Object.keys(this.user).length !== 0) && (JSON.stringify(this.user))
                }
            </div>
        );
    }
}

export default User;
