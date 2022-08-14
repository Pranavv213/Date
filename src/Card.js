import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import './Card.css'
import {database} from './firebase'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import './Card.css'
import Card1 from "./Card1"
import {Link} from 'react-router-dom'

function Card({state,state1,state2,state3}) {
    
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [item,setItem]=useState(state)
    const [buttonState,setButtonState]=useState('see')
    const [buttonState1,setButton1State]=useState('see')
    const [start,setStart]=useState('yes')
    const [reply,setReply]=useState('')
  
    let handleButton2=()=>{
      // alert(state1)
      setButtonState('back')
    }
    let handleButton3=async()=>{
      let data=await database.users.get()
      
      data.forEach((obj)=>{
          if(obj.data().name=='docs')
          {
              let array=obj.data().arr; 
              let q=obj.data().text
              console.log(state1);
              q.forEach((x)=>{
                  if(x.message==state1)
                  {
                    console.log('gud')
                    x.likes=x.likes+1;  
                    database.users.doc(obj.id).set({name:'docs',arr:array,text:q})
                  }
              })

             
                  
              }
           }
      )
    }
    let handleButton4=()=>{
      // alert(state1)
      setButtonState('backs')
    }
    let createUserInDBRely=async()=>{
      let data=await database.users.get()
      
      data.forEach((obj)=>{
          if(obj.data().name=='docs')
          {
              let array=obj.data().arr; 
              let q=obj.data().text
              console.log(state1);
              q.forEach((x)=>{
                  if(x.message==state1)
                  {
                    console.log('gud')
                    let qq=x.comments;
                    qq.push(reply);
                    x.comments=qq;  
                    console.log(q)
                    database.users.doc(obj.id).set({name:'docs',arr:array,text:q})
                  }
              })

             
                  
              }
           }
      )
    }

  return (
  
  <div class="div1">
    {buttonState=='see'?<div> &nbsp;&nbsp;&nbsp;
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
'border': '1px solid rgba(255, 255, 255, 0.3)','text-decoration':'none'}} onClick={handleButton2}><t style={{'color':'black'}}>view confession</t></button>
     &nbsp;&nbsp;&nbsp;
     
     &nbsp;&nbsp;&nbsp;
     <button style={{/* From https://css.glass */
'background': 'rgba(255, 255, 255, 0.57)',
'border-radius': '5px',
'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
'backdrop-filter': 'blur(5px)',
'-webkit-backdrop-filter': 'blur(5px)',
'border': '1px solid rgba(255, 255, 255, 0.3)','text-decoration':'none'}} onClick={handleButton3}><t style={{'color':'black'}}>💖{state3}</t></button>
&nbsp;&nbsp;&nbsp;
<button style={{/* From https://css.glass */
'background': 'rgba(255, 255, 255, 0.57)',
'border-radius': '5px',
'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
'backdrop-filter': 'blur(5px)',
'-webkit-backdrop-filter': 'blur(5px)',
'border': '1px solid rgba(255, 255, 255, 0.3)','text-decoration':'none'}} onClick={handleButton4}><t style={{'color':'black'}}>📝</t></button>
     </div>:<div>
      {buttonState=='back'?<div>
      <div>
      <button style={{/* From https://css.glass */
            'background': 'rgba(255, 255, 255, 0.57)',
            'border-radius': '5px',
            'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter': 'blur(5px)',
            '-webkit-backdrop-filter': 'blur(5px)',
            'border': '2px solid rgba(0, 0, 0, 0.3)','text-decoration':'none'}} onClick={()=>{
        setButtonState('see')
      }}>back</button>
      <div style={{'color':'white'}}>
    {state1}
    </div>
    </div>
      </div>:<div> <button style={{/* From https://css.glass */
            'background': 'rgba(255, 255, 255, 0.57)',
            'border-radius': '5px',
            'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter': 'blur(5px)',
            '-webkit-backdrop-filter': 'blur(5px)',
            'border': '2px solid rgba(0, 0, 0, 0.3)','text-decoration':'none'}} onClick={()=>{

        setButtonState('see')
      }}>back</button>
      <div style={{'color':'white','text-align':'center'}}>Comments</div>
      <br></br>
      {
        
        state2.reverse().map(x=>{
          return (
            <div style={{/* From https://css.glass */
            'background': 'rgba(255, 255, 255, 0.57)',
            'border-radius': '5px',
            'text-align':'center',
            'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter': 'blur(5px)',
            '-webkit-backdrop-filter': 'blur(5px)',
            'border': '2px solid rgba(0, 0, 0, 0.3)','text-decoration':'none'}}>
              {x}
              </div>
          )
        })}
        <br></br>
      <input placeholder="write comment" onChange={(event)=>{
        setReply(event.target.value)
      }}></input>
      <button style={{/* From https://css.glass */
            'background': 'rgba(255, 255, 255, 0.57)',
            'border-radius': '5px',
            'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter': 'blur(5px)',
            '-webkit-backdrop-filter': 'blur(5px)',
            'border': '2px solid rgba(0, 0, 0, 0.3)','text-decoration':'none'}} onClick={
        createUserInDBRely}>reply</button>
      </div>}
      </div>
  }
     
  </div>
 
  
    
  )
}

export default Card