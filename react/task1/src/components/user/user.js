// import React from "react";
//
// export default function User(props) {
//     let {singleUser} = props;
//     return(
//         <div>
//             <div> {singleUser.name} - {singleUser.age}</div>
//             <h3>{singleUser.status.toString()}</h3>
//         </div>
//     )
//
// }
import React, {Component} from 'react';

class User extends Component {
    state = {status: this.props.singleUser.status}

    constructor(props) {
        super(props);
    }
    action = (singleUser) => {
        singleUser.status = !singleUser.status;
        this.setState({status: this.props.singleUser.status});
    }

    render() {
        let {singleUser} = this.props;
        return (
            <div>
                {
                    singleUser.status && (
                        <b>
                            <div> {singleUser.name} - {singleUser.age} - {singleUser.status.toString()}</div>
                        </b>
                    )
                }
                {
                    !singleUser.status && (
                        < div> {singleUser.name} - {singleUser.age} - {singleUser.status.toString()}</div>
                    )
                }
                <button onClick={() => {return this.action(singleUser)}}>Details</button>
            </div>
        );
    }
}

export default User;
