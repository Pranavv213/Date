import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import './Card.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import './Card.css'

function Card({state,state1,state2}) {
    
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [item,setItem]=useState(state)
    const [buttonState,setButtonstate]=useState('see')
    const [start,setStart]=useState('yes')
  
    let handleButton2=()=>{
      alert(state1)
    }

  return (
  
  <div class="div1">
      {state}
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleButton2}>see</button>
     
  </div>
 
  
    
  )
}

export default Card