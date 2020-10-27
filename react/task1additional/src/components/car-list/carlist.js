import React, {Component} from 'react';
import {carsList} from "../../data/data";
import Car from "../car/car";

class Carlist extends Component {
    state = {carsList1: carsList}

    constructor(props) {
        super(props);
    }

    action = (carsList) => {
        let currentIndex = carsList.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = carsList[currentIndex];
            carsList[currentIndex] = carsList[randomIndex];
            carsList[randomIndex] = temporaryValue;
        }
        this.setState({carsList1: carsList})
    }

    render() {
        return (
            <div>
                {
                    carsList.map((car, index) => {
                        return (
                            <Car someCar={car} key={index}/>
                        )
                    })
                }
                <button onClick={() => {return this.action(carsList)}}>Shuffle</button>

            </div>
        );
    }
}

export default Carlist;
