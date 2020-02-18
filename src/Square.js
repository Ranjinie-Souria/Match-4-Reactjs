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
        return (
                <td onClick={props.onClick} >
                    {jeton(props.value)}
                </td>
        );

}

export default Square;