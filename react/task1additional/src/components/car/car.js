import React, {Component} from 'react';

class Car extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        let {someCar} = this.props
        return (
            <div>
                <div>{someCar.producer} - {someCar.model}</div>
                {/*<button onClick={() => ()}>Delete</button>*/}
            </div>
        );
    }
}

export default Car;
