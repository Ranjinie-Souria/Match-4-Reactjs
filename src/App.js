import React, { Component } from 'react';
import Game from './Game';
import './App.css'
import Hoc from './HOC';


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header"><h1>Puissance 4</h1><img src="logo.png" className="App-logo"/></header>
                <div className="App-main"><Game/></div>
            </div>
        )
    }
}

export default App;