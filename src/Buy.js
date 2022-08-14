import React,{useState,useEffect} from 'react'
import {database} from './firebase'
import './firebase1.css'
import Card from './Card'
import './Buy.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"

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
               q.push({name:name,message:val})
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
       <input class="t1" onChange={handleInput1} rows="4" cols="50">
        </input>
        <br></br>
        <textarea class="t1" onChange={handleInput} rows="4" cols="50">
</textarea>
<br></br>
<div class="b1">
            <button  onClick={refreshChange}>🔃</button>
            <button class="b12" onClick={createUserInDB}>post</button>
</div>
        
      
        {
            myState.items.map(x=>{
                return (
                    
                    <Card state={x.name} state1={x.message} state2={x.name}/>
                    
                )
            })
        }
        </div>
    </div>
  )
}

export default Buy