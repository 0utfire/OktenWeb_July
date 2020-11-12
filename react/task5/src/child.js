import React, {Component} from 'react';
import {MyConsumer, MyContext} from "./contextService";

class Child extends Component {
    render() {
        console.log(this.context);
        const {users} = this.props
        return (
            <div>

            </div>
        );
    }
}
Child.contextType = MyContext
export default Child;
