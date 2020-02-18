import React, { Component } from 'react';
import Board from './Board';
import Hoc from './HOC';


// TODO : Calculer le gagnant
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return [squares[a], lines[i]];
        }
    }
    return null;

}

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(42).fill(null),
            redIsNext: true,
            showInfo: 'visible',
        };
    }

    handleClick(i) {
        const squares = this.state.squares;

        /*if (calculateWinner(squares) || squares[i]) {
            return;
        }*/

        let table0 = [];
        for (let int = 0; int<70; int++) {
            if (int % 7 === 0) {
                table0.push(int);
            }
        }

        let table1 = table0.map((nb) => nb+1);
        let table2 = table0.map((nb) => nb+2);
        let table3 = table0.map((nb) => nb+3);
        let table4 = table0.map((nb) => nb+4);
        let table5 = table0.map((nb) => nb+5);
        let table6 = table0.map((nb) => nb+6);


        let ligne;

        for(let a=0;a<=6;a++){
            if(table0[a]===i){
               // colonne = 0;
                for (let b=5;b!==-1;b--){
                    let laCase = table0[b];
                    if(squares[laCase] == null){
                        ligne = laCase;
                        break;
                    }
                }
            }
            else if(table1[a]===i){
             //   colonne = 1;
                for (let b=5;b!==-1;b--){
                    let laCase = table1[b];
                    if(squares[laCase] == null){
                        ligne = laCase;
                        break;
                    }
                }
            }
            else if(table2[a]===i){
               // colonne = 2;
                for (let b=5;b!==-1;b--){
                    let laCase = table2[b];
                    if(squares[laCase] == null){
                        ligne = laCase;
                        break;
                    }
                }
            }
            else if(table3[a]===i){
              //  colonne = 3;
                for (let b=5;b!==-1;b--){
                    let laCase = table3[b];
                    if(squares[laCase] == null){
                        ligne = laCase;
                        break;
                    }
                }
            }
            else if(table4[a]===i){
              //  colonne = 4;
                for (let b=5;b!==-1;b--){
                    let laCase = table4[b];
                    if(squares[laCase] == null){
                        ligne = laCase;
                        break;
                    }
                }
            }
            else if(table5[a]===i){
              //  colonne = 5;
                for (let b=5;b!==-1;b--){
                    let laCase = table5[b];
                    if(squares[laCase] == null){
                        ligne = laCase;
                        break;
                    }
                }
            }
            else if(table6[a]===i){
              //  colonne = 6;
                for (let b=5;b!==-1;b--){
                    let laCase = table6[b];
                    if(squares[laCase] == null){
                        ligne = laCase;
                        break;
                    }
                }
            }
        }

        squares[ligne] = this.state.redIsNext ? 'red' : 'gold';

        this.setState({
            squares: squares,
            redIsNext: !this.state.redIsNext,
        });
    }

    showInfoMenu() {
        var showInfo = this.state.showInfo;
        if (showInfo === 'visible') {
            this.setState({showInfo: 'hidden'})
        } else {
            this.setState({showInfo: 'visible'})
        }
    }

    getStatus() {
        return (<div className="info" style={{visibility: this.state.showInfo}}><h2>Tour du joueur
            : </h2>{this.state.redIsNext ? <h2 className="h2-rouge">Rouge</h2> : <h2 className="h2-jaune">Jaune</h2>}
        </div>);
    }

    render() {
        let status = this.getStatus();
        return (
            <div className="main">
                <button onClick={() => this.showInfoMenu()}>Cacher/Montrer les informations</button>
                {status}
                <div className="game">
                    <Board
                        squares={this.state.squares}
                        onClick={(i) => this.handleClick(i)}/>
                </div>
            </div>
        );
    }



}

export default Game;