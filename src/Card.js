import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import './Card.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import './Card.css'
function Card({state}) {
    
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [items,setItems]=useState([''])
    const [item,setItem]=useState('')
  return (
  
  <div class="div1">
      {state}
  </div>
 
  
    
  )
}

export default Card