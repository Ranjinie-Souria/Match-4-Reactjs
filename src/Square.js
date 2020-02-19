// TableRow.js

import React from "react";

function jeton(props){
    if (props==='red'){
        return <div className="jeton-rouge"/>
    }
    else if(props==='gold'){
        return <div className="jeton-jaune"/>
    }
    else {
        return null;
    }
}

function Square(props){

    let style = [];
    if (props.colorWinner) {
        style[0] = 'cyan';
        style[1] = 'darkcyan inset 2px 2px 15px';
        style[2] = 'dashed 2px aqua';
    } else {
        style[0] = 'midnightblue';
        style[1] = 'black inset 2px 2px 15px';
        style[2] = 'solid 1px darkslateblue';
    }

        return (
            <td style={{backgroundColor: style[0], boxShadow: style[1], border: style[2]}}
                onClick={props.onClick}>
                    {jeton(props.value)}
                </td>
        );

}

export default Square;