import React, {useContext, useEffect, useState} from "react";
import {withRouter} from "react-router";
import {IdContext} from "../contextservice";

function PostList(props) {

    // const id = useContext(IdContext);
    const id = props.match.params.id
    const [posts, setPosts] = useState([]);

    const GoToUser = () => {
        props.history.push({
            pathname: `/users/${id}`
        })

    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    });

    return (
        <div>
            <button onClick={GoToUser}>Go to User</button>
            {
                posts && (
                    posts.map(post => (
                        <div key={post.id}>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                            <hr/>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default withRouter(PostList)
