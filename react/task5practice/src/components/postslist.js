import {IdContext} from "../contextservice";
import React, {useContext, useEffect, useState} from "react";
import {withRouter} from "react-router";

function PostList(props) {

    const id = useContext(IdContext);
    console.log(id);
    let [posts, setPosts] = useState([]);

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
            {
                posts && (posts.map(post => (
                    <div>
                        <button onClick={GoToUser}>Go to User</button>
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <hr/>
                    </div>
                )))
            }


        </div>
    )


}
export default withRouter(PostList)
