import Child from "./child";
import React from "react";

export default function Parent(props) {

    let {users} = props;

    return (
        <div>
            <Child/>
        </div>
    )

}
