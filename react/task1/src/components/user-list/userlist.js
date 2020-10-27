import React, {Component} from 'react';
import {users} from "../../data/data";
import User from "../user/user";

class Userlist extends Component {
    render() {
        return (
            <div>
                {
                    users.map((user, index) => {
                        return (
                            <User singleUser={user} key={index}/>
                        )
                    }
                )
                }
            </div>
        );
    }
}

export default Userlist;
