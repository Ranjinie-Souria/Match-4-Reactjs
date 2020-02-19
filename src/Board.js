import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

    static calculateVictory(winner, i) {
        if (winner != null) {
            if (winner[1][0] === i || winner[1][1] === i || winner[1][2] === i || winner[1][3] === i) {
                return true;
            }
        }
    }

    renderSquare(i){
        return <Square key={i}
                       colorWinner={Board.calculateVictory(this.props.colorWinner, i)}
                       value={this.props.squares[i]}
                       onClick={() => this.props.onClick(i)}
        />;
    }

    createBoard(){
        let leBoard = [];
        let table = [];

        for (let i = 0; i<49; i++) {
            if (i % 7 === 0) {
                table.push(i);
            }
        }

        let indice = 0;
        for (let i = 0; i<=49; i++){
            if(i%7===0){
                for(let a = table[indice]; a < table[indice+1]; a++) {
                    leBoard.push(this.renderSquare(a));
                }
                indice += 1;
            }
        }

        let newBoard = [];
        for(let i = 0; i < 6; i++){
            newBoard.push(<tr key={i}>{leBoard.slice(table[i],table[i+1])}</tr>);
        }

        return <tbody>{newBoard}</tbody>;
    }

    render() {
        return (
            <div className="container">
                <table>
                    {this.createBoard()}
                </table>
            </div>
        );
    }
}
export default Board;