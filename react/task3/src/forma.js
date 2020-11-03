import React, {Component} from 'react';
import {Apiservice} from "./services/apiservice";
import User from "./components/user/user";

class Forma extends Component {
    api = new Apiservice();
    state = {user: {}};


    constructor(props) {
        super(props);
        this.name = React.createRef
    }

    async showUser(id) {
        console.log(this.api.GetUserById(id));
        this.setState({user: await this.api.GetUserById(id)})
    }

    render() {
        return (
            <div>
                {/*<input ref={this.name }/>*/}
                <input ref={(input) => this.id = input }/>
                <button onClick={() => this.showUser(this.id.value)}>Search</button>
                <User user={this.state.user} key={this.id}/>
            </div>
        );
    }

    // actionX = (e)=> {
    //     // console.log(this.name.current.value);
    //     console.log(this.name.value);
    // }
}

export default Forma;
