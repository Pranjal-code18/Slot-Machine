import React from "react";
const Slotm = (props) =>{
    if((props.x===props.y) && (props.y===props.z)){
        return (
            <div className="match">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>It is matching</h1>
                <hr/>
            </div>
        )
    }
    else{
        return (
            <div className="match">
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>It is not  matching</h1>
                <hr/>
            </div>
        )
    }
};

export default Slotm;
