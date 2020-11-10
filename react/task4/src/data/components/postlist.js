import {withRouter} from "react-router";
import React from "react";

export const Postlist = (props) => {

    return (
        <div>
            <h2>PostList</h2>
            <button onClick={() => props.history.push('/')}>Home</button>

        </div>
    )
}
export default withRouter(Postlist)
