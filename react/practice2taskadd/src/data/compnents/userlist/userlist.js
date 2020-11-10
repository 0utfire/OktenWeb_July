import React, {Component} from 'react';

class Userlist extends Component {

    render() {

    let {user} = this.props

        return (
            <div>
                <hr/>
                {user.name}
                <br/>
                {user.email}
            </div>
        );
    }
}

export default Userlist;
