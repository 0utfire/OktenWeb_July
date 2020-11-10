import React, {Component} from "react";

class Userlist extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({users}))
    }

    GoToHome = () => {
        this.props.history.push(
            {
                pathname: '/'
            }
        )

    }

    render() {
        return (
            <div>
                <button onClick={this.GoToHome}>Home</button>
                {
                    this.state.users.map(user => (
                        <div  key={user.id}>
                            <p>{user.name}</p>
                            <button onClick={()=> this.props.history.push(`/users/${user.id}`)}>Show user</button>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        );
    }

}

export default Userlist;
