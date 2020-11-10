import React, {Component} from 'react';

class Registrationform extends Component {

    state= {users:[]}

    constructor(props) {
        super(props);
        this.name = React.createRef
        this.email = React.createRef

    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" ref={(input) => this.name = input}/>
                    <input type="email" ref={(input) => this.email = input}/>
                </form>
            </div>
        );
    }
}

export default Registrationform;
