import React,{useState,useEffect} from 'react'
import {database} from './firebase'
import './firebase1.css'
import Card from './Card'
import './Buy.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import {Link} from 'react-router-dom'
function Buy() {
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    let handleInput1=(event)=>{
        setName(event.target.value)
    }
    let handleInput=(event)=>{
        setVal(event.target.value)
    }
    let handleButton=()=>{
        setTxt(val)
    }
    let refreshChange=()=>{
        setrefresh(refresh+1)
    }
    let createUserInDB=async()=>{
       setTxt(val+"apple")
       console.log('changed')
        let data=await database.users.get()
       data.forEach((obj)=>{
           if(obj.data().name=="docs")
           {
               let array=obj.data().arr; 
               let q=obj.data().text
               q.push({name:name,message:val,likes:0,comments:[]})
               database.users.doc(obj.id).set({name:'docs',arr:array,text:q})
                   
               }
            }
       )
     }
          
    
     let createUserInDB1=async()=>{
       
        let data=await database.users.get()
       data.forEach((obj)=>{
           if(obj.data().name=="docs")
           {
                
               let array=obj.data().text;
               dispatch(incNumber({username:myState.username,items:array.reverse()}));
            

               
           }
        })
    }
    const [val,setVal]=useState('')
    const [name,setName]=useState('')
    const [txt,setTxt]=useState([])
    const [refresh,setrefresh]=useState(1)
   
    useEffect(()=>{
        createUserInDB1()
    },[refresh])
  return (
    <div>
       <div class="q1">
       <input class="t1" placeholder="name of the person u want to confess" onChange={handleInput1} rows="4" cols="50">
        </input>
        
        <textarea class="t1" placeholder="write ur confessions here" onChange={handleInput} rows="4" cols="50">
</textarea>

<div class="b1">
            <button class="refresh" onClick={refreshChange}>🔃</button>
            <button  class="b12" onClick={createUserInDB}>post</button>
</div>
        <br></br>
      
        {
            myState.items.map(x=>{
                return (
                    <div>
                        <div style={{/* From https://css.glass */
'text-align': 'center',
'color':'white',
'min-width':'10em',
'background': 'rgba(255, 255, 255, 0.2)',
'border-radius': '5px',
'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
'backdrop-filter': 'blur(5px)',
'-webkit-backdrop-filter': 'blur(5px)',
'border': '1px solid rgba(255, 255, 255, 0.3)'}}>
                    {/* 💖 &nbsp; <t style={{'color': 'white'}}>reply</t> */}
                     To &nbsp;
                    {x.name}
                    </div>
                    <Card state={x.name} state1={x.message} state2={x.comments} state3={x.likes}/>
                    
                    </div>

                    
                )
            })
        }
        </div>
    </div>
  )
}

export default Buy