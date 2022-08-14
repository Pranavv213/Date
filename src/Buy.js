import React,{useState,useEffect} from 'react'
import {database} from './firebase'
import './firebase1.css'
function Buy() {
    let handleInput=(event)=>{
        setVal(event.target.value)
    }
    let handleButton=()=>{
        setTxt(val)
    }
    let createUserInDB=async()=>{
        let data=await database.users.get()
       data.forEach((obj)=>{
           if(obj.data().name=="docs")
           {
               let array=obj.data().arr; 
               let q=obj.data().text
               q.push(val)
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
               setTxt(array.reverse())
           }
        })
    }
    useEffect(()=>{
        createUserInDB1()
    })
   
   
    const [val,setVal]=useState('')
    const [txt,setTxt]=useState([])
  return (
    <div>Buy
        <br></br>
        <input onChange={handleInput}></input>
        <button onClick={createUserInDB}>send</button>
        <br></br>
        {
            txt.map(x=>{
                return (
                    <div>
                        {x}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Buy