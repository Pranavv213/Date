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
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;
      
      <button style={{/* From https://css.glass */
'background': 'rgba(255, 255, 255, 0.57)',
'border-radius': '5px',
'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
'backdrop-filter': 'blur(5px)',
'-webkit-backdrop-filter': 'blur(5px)',
'border': '1px solid rgba(255, 255, 255, 0.3)'}} onClick={handleButton2}>view confession</button>
     &nbsp;&nbsp;&nbsp;
     💖
     &nbsp;&nbsp;&nbsp;
     📝
  </div>
 
  
    
  )
}

export default Card