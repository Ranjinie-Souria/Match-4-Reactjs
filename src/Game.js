import React, { Component } from 'react';
import Board from './Board';
import Hoc from './HOC';

function calculateWinner(squares) {
    let lines = [];
    for (let i = 0; i < 42; i++) {
        lines.push([i, i + 1, i + 2, i + 3]);
    }
    for (let i = 0; i < 4; i++) {
        lines.push([i, i + 8, i + 8 * 2, i + 8 * 3]);
    }
    for (let i = 7; i < 11; i++) {
        lines.push([i, i + 8, i + 8 * 2, i + 8 * 3]);
    }
    for (let i = 14; i < 18; i++) {
        lines.push([i, i + 8, i + 8 * 2, i + 8 * 3]);
    }
    for (let i = 6; i > 2; i--) {
        lines.push([i, i + 6, i + 6 * 2, i + 6 * 3]);
    }
    for (let i = 13; i > 9; i--) {
        lines.push([i, i + 6, i + 6 * 2, i + 6 * 3]);
    }
    for (let i = 20; i > 16; i--) {
        lines.push([i, i + 6, i + 6 * 2, i + 6 * 3]);
    }
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];
        // Vérifie si les cases sont égales et non nulles
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
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

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

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
        const showInfo = this.state.showInfo;
        let showInfoButton = document.getElementById("showInfo");
        if (showInfo === 'visible') {
            this.setState({showInfo: 'hidden'});
            showInfoButton.innerHTML = "Montrer les informations";
        } else {
            this.setState({showInfo: 'visible'});
            showInfoButton.innerHTML = "Cacher les informations";
        }
    }

    resetGame() {
        this.setState({
            squares: Array(42).fill(null),
            redIsNext: true,
            showInfo: 'visible',
        })
    }

    getStatus() {
        const winner = calculateWinner(this.state.squares);
        if (winner) {
            let red = false;
            if (winner[0] === 'red') {
                red = true;
            }
            return (<div className="info" style={{visibility: this.state.showInfo}}><h2>Gagnant : </h2>{red ?
                <h2 className="h2-rouge">Rouge</h2> : <h2 className="h2-jaune">Jaune</h2>}
                <button onClick={() => this.resetGame()}>Recommencer à jouer</button>
            </div>);
        } else {
            let nb = 0;
            for (let i = 0; i < this.state.squares.length; i++) {
                if (this.state.squares[i] == null) {
                    nb += 1;
                }
            }
            if (nb === 0) {
                return (<div className="info" style={{visibility: this.state.showInfo}}><h2>Personne ne gagne ! </h2>
                    <button onClick={() => this.resetGame()}>Recommencer à jouer</button>
                </div>);
            } else {
                return (<div className="info" style={{visibility: this.state.showInfo}}><h2>Tour du joueur
                    : </h2>{this.state.redIsNext ? <h2 className="h2-rouge">Rouge</h2> :
                    <h2 className="h2-jaune">Jaune</h2>}</div>);
            }
        }
    }

    render() {
        let status = this.getStatus();
        const winner = calculateWinner(this.state.squares);
        return (
            <div className="main">
                <button id="showInfo" className="button-info" onClick={() => this.showInfoMenu()}>Cacher les
                    informations
                </button>
                <div className="game">{status}
                    <Board
                        colorWinner={winner}
                        squares={this.state.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
            </div>
        );
    }
}

export default Game;