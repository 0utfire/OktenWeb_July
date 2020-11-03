import React, {Component} from 'react';
import Usersearch from "./components/usersearch/usersearch";

class ControlledForma extends Component {

    state={
        search:""
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value={ this.state.search} onChange={this.onInputChangeValue}/>
                    {/*<button>Send</button>*/}
                    <Usersearch search={this.state.search} key={this.state.search}/>
                </form>
            </div>
        );
    }

    onFormSubmit = (e) => {
        e.preventDefault()
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(this.state, prevState)
    // }

    onInputChangeValue = (e) => {
        this.setState({search: e.target.value})
        // console.log(e.target.value);
    }
}

export default ControlledForma;
