import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {


    renderSquare(i){
        return <Square key={i}
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

        let indice = -1;
        for (let i = 0; i<=49; i++){
            if(i%7===0){
                indice += 1;
                for(let a = table[indice]; a < table[indice+1]; a++) {
                    leBoard.push(this.renderSquare(a));
                }
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