import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import  './Feeds.css';
import { useFetch } from './useFetch';
import Comments from './Comments';
export default function Feeds() {
    const {data, setData,count,setCount}= useContext(Usecontext1);

    const url = "https://jsonplaceholder.typicode.com/posts";
    useFetch(url);

  return (
    
    <div className="feeds-container">
      <div><h1>[All Feeds]</h1></div>
    {data && data.map((elem) => (
      <div key={elem.id}>
        
        <div>UserId: {elem.userId}</div>
        <div>Title: {elem.title}</div>
        <div>Body: {elem.body}</div>
        <div onClick={()=>setCount(elem.id)}>
          <Link to="/comments">
        <button>View Comments</button>
        </Link>
        </div><br></br>
      </div>
    ))}
  </div>
  )
}
