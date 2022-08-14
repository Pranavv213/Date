import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import './Card.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
function Card({state,state2}) {
    
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [items,setItems]=useState([''])
    const [item,setItem]=useState('')
  return (
    
    
       <div class="img">
        <img class src={state}></img>
        <div>
      {state2}
      </div>
        </div>
    
  )
}

export default Card