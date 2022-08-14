import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
function Card2({q1,q2}) {
  const myState=useSelector((state)=> state.changethenum)
  const dispatch = useDispatch();
  return (
    <div>
    {q1}
    
    </div>
  )
}

export default Card2