import React, {useEffect, useState} from "react";
import {withRouter} from "react-router";



function User (props) {
    const id = props.match.params.id
    const [user,setUser] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(user => setUser(user))
    })

    const GoToUserlist = () => {
        props.history.push({
            pathname:'/users'
        })
    }

    return (
        <div>
            <button onClick={GoToUserlist}>Go to Userlist</button>
            {
                user && (
                    <div>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <button onClick={() => props.history.push(`/users/${user.id}/posts`)}>Show posts</button>
                        <button onClick={() => props.history.push(`/users/${user.id}/comments`)}>Show comments</button>
                        <hr/>
                    </div>
                )
            }
        </div>
    );

}

export default withRouter(User)
