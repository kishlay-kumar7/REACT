import { useState  } from "react";


function Button({types,onClick,moves}){
    let color={backgroundColor:types,width:"90px"}
    return (
        <>
        <h3>{types} Count:{moves[types]}</h3>
        <button className="{types}" onClick={onClick} style={color}>{types}</button>
        </>
    )
}
export default function count(){
    let [moves,setMoves]=useState({green:0,yellow:0,red:0})
    
    function updateGreen(){
        setMoves((prev)=>{
            return {...prev,green:prev.green+1};
        })
    }
    function updateYellow(){
        setMoves((prev)=>{

            return {...prev,yellow:prev.yellow+1};
        })
    }
    function updateRed(){
        setMoves((prev)=>{
            return {...prev,red:prev.red+1};
        })
    }
    return(
        <>
            <Button types="green" onClick={updateGreen} moves={moves}/>
            <Button types="yellow" onClick={updateYellow} moves={moves}/>
            <Button types="red" onClick={updateRed} moves={moves}/>
        </>
    )
}
