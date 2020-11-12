import React, {useEffect, useState} from "react";

export default function Userlist (props) {
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

    return (
        <div>
            <button onClick={GoToHome}>Home</button>
            {
                users.map(user => (
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <button onClick={() => props.history.push(`/users/${user.id}`)}>Show user</button>
                        <hr/>
                    </div>
                ))
            }
        </div>
    )


}
