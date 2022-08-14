import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import Card from "./Card"
function Buy() {
    let handleInput=(event)=>{
        setNews(event.target.value)
        console.log(event.target.value)
    }
    let handleButton=(event)=>{
        setSearch(news)
        setLoad('yes')
    }
    let c1=(event)=>{
        setSearch('politics')
        setLoad('yes')
    }
    let c2=(event)=>{
        setSearch('sports')
        setLoad('yes')
    }
    let c3=(event)=>{
        setSearch('movies')
        setLoad('yes')
    }
    let c4=(event)=>{
        setSearch('celebrities')
        setLoad('yes')
    }
    let c5=(event)=>{
        setSearch('technology')
        setLoad('yes')
    }
    let c6=(event)=>{
        setSearch('business')
        setLoad('yes')
    }
    let c7=(event)=>{
        setSearch('crypto')
        setLoad('yes')
    }
   
   
    useEffect(() => {

        const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',
  params: {q:search, lang: 'en'},
  headers: {
    'X-RapidAPI-Key': 'bf0e31d50dmsh79c335e54fd5370p1161a8jsnf506237baca2',
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    setLoad('no')
    dispatch(incNumber({username:myState.username,items:response.data.articles}));
	console.log(myState);
}).catch(function (error) {
	console.error(error);
});
    })
    const [news,setNews]=useState('india')
    const [search,setSearch]=useState('elon musk')
    const [load,setLoad]=useState('yes')
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
  return (
    <div>
        {load==='yes'?<div ><img  src="https://cdn.dribbble.com/users/3337757/screenshots/6825268/076_-loading_animated_dribbble_copy.gif"/></div>:<div class="content">
            <div class="button">
            <button class="a" onClick={c1}>politics</button>
            <button class="a" onClick={c2}>sports</button>
            <button class="a" onClick={c3}>movies</button>
            <button class="a" onClick={c4}>celebreties</button>
            <button class="a" onClick={c5}>technology</button>
            <button class="a" onClick={c6}>business</button>
            <button class="a" onClick={c7}>crypto</button>
        <input class="aa" placeholder="search for any news" onChange={handleInput}></input>
        <button class="aa1" onClick={handleButton}>search</button>
        </div>
        <div className='Hello'>
        {myState.items.map(x=>{
            return(
                <div>
                    <Card state={x.media} state2={x.summary}/>
                    <hr></hr>
                    </div>
                   
                    
            )
        })}
        </div>
            </div>}
        
        
       
    </div>
  )
}

export default Buy