import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
function Card1({q}) {
  const myState=useSelector((state)=> state.changethenum)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>{
        setButtonState('see')
      }}>back</button>
    {q}
    </div>
  )
}

export default Card1