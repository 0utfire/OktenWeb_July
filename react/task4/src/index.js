import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const application  = (
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>
)

ReactDOM.render(application, document.getElementById('root')
);

// If you want to star t measuring pe rformance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
