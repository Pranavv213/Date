import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import './Card.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import './Card.css'
import Card1 from "./Card1"
import { Link } from 'react-router-dom';
function Card({state,state1,state2}) {
    
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [item,setItem]=useState(state.name)
    const [buttonState,setButtonstate]=useState('see')
    const [start,setStart]=useState('yes')
    let handleButton2=()=>{

      
      if(buttonState=='see'){
        setItem(state.message)
        setButtonstate('back')
      }
      else{
        setItem(state.name)
        setButtonstate('see')
      }
    }
    
  return (
  
  <div class="div1">
      {state2}
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleButton2}>{buttonState}</button>
     
  </div>
 
  
    
  )
}

export default Card