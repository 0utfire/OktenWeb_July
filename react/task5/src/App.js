import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    let [text, setText] = useState('default text');
    let [color, setColor] = useState('red')

    useEffect(()=>{
        console.log('change state')
    })

    return (
        <div>
            {text}
            <button onClick={()=> {setText(((prevState) => {
                console.log(prevState)
                return 'new Text'}))}}>change{color}</button>
        </div>
    );
}

export default App;
