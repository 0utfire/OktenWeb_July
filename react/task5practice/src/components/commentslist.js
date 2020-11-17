import React, {useContext, useEffect, useState} from "react";
import {withRouter} from "react-router";

function CommentList(props) {

    const id = props.match.params.id
    const [comments, setComments] = useState([]);

    const GoToUser = () => {
        props.history.push({
            pathname: `/users/${id}`
        })

    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`)
            .then(response => response.json())
            .then(comments => setComments(comments))
    });

    return (
        <div>
            <button onClick={GoToUser}>Go to User</button>
            {
                comments && (
                    comments.map(comment => (
                        <div key={comment.id}>
                            <p>{comment.id}</p>
                            <p>{comment.title}</p>
                            <p>{comment.body}</p>
                            <hr/>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default withRouter(CommentList)
