import React, { Component } from 'react';
import Game from './Game';
import Hoc from './HOC';


class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header"/>
                    <Game/>
            </div>
        )
    }
}

export default App;