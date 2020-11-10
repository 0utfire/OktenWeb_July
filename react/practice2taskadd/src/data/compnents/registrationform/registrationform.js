import React, {Component} from 'react';
import Userlist from "../userlist/userlist";

class Registrationform extends Component {

    state = {
        users:[]
    }

    createUser = (name, email) => {
        let users = localStorage.getItem('users');
        let arr = []
        if (users) {
            arr = JSON.parse(users)
        }
        arr.push({name, email});
        localStorage.setItem('users', JSON.stringify(arr))

    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    showUsers = () => {
        let usersArray = JSON.parse(localStorage.getItem('users'));
        this.setState({users: usersArray})


    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <p>Registration Form</p>
                    <input type="text" ref={(input) => this.name = input}/>
                    <br/>
                    <br/>
                    <input type="email" ref={(input) => this.email = input}/>
                    <br/>
                    <br/>
                    <button onClick={() => this.createUser(this.name.value, this.email.value)}>Create User</button>
                    <br/>
                    <button onClick={this.showUsers}>Show Users</button>
                    <br/>
                    <br/>
                    {this.state.users.map(user => (
                        <Userlist user={user}/>
                    ))}
                </form>
            </div>
        );
    }

}

export default Registrationform;
