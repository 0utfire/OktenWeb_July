import React, {Component} from 'react';
import {Apiservice} from "../../services/apiservice";

class Usersearch extends Component {
    search = this.props.search
    api = new Apiservice()
    state = {users: []}

    async componentDidMount(){
        this.setState({users: await this.api.GetUserByName()})
    }

    render() {
        return (
                this.state.users.map(user => (
                    ((user.name).toLowerCase().includes(this.search.toLowerCase()) && (this.search!=='')) && (<div>{user.name}</div>)

                ))

        );
    }
}

export default Usersearch;
