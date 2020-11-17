import React, {useEffect, useState} from "react";
import {withRouter} from "react-router";

function Userlist (props) {
    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setUsers(users))
    })

    const GoToHome = () => {
        props.history.push(
            {
                pathname: '/'
            }
        )

    };

   const  showUser = (user) => {
       props.saveUserId(user.id)
       props.history.push(`/users/${user.id}`);
   }

    return (
        <div>
            {/*<button onClick={GoToHome}>Home</button><hr/>*/}
            {
                users.map(user => (
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <button onClick={() => showUser(user)}>Show user</button>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )
}

export default withRouter(Userlist)
