import React, {Component} from 'react';
import {carsList} from "../../data/data";
import Car from "../car/car";

class Carlist extends Component {
    state = {
        carsArray: [...carsList]
    }


    // constructor(props) {
    //     super(props);
    // }

    action = () => {
        const carsList = this.state.carsArray;
        let currentIndex = carsList.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = carsList[currentIndex];
            carsList[currentIndex] = carsList[randomIndex];
            carsList[randomIndex] = temporaryValue;
        }
        this.setState({carsArray: carsList})
    }

    render() {
        console.log('.');
        return (
            <div>
                {
                    this.state.carsArray.map((car) => {
                        return (
                            <Car someCar={car} key={car.producer}/>
                        )
                    })
                }
                <button onClick={() => this.action()}>Shuffle</button>

            </div>
        );
    }
}

export default Carlist;
