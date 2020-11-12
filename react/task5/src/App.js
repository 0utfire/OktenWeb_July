import './App.css';
import React from "react";
import UserList from "./components/userList";

class App extends React.Component {
    state = {users:[]}

    getUserByID = (id) => {
        let {users} = this.state;
        let find = users.find(value => value.id ===id);
        console.log(find);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            })
    }

    render() {
        return (
            <div>
                <UserList users={this.state.users} getUserById={this.getUserByID}/>
            </div>
        );
    }
}

export default App;
