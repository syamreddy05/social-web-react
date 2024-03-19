import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
import { useFetch } from './useFetch';
export default function Todos() {
    const {data, setData}= useContext(Usecontext1);
    const url = "https://jsonplaceholder.typicode.com/todos?userId=1";
 
    useFetch(url)
      

  return (
    
    <div className="feeds-container">
    {data && data.map((elem) => (
      <div key={elem.id}>
        <div>UserId: {elem.userId}</div>
        <div>Id: {elem.id}</div>
        <div>Title: {elem.title}</div>
        <div>Completed: {elem.completed}</div><hr></hr>
      </div>
    ))}
  </div>
  )
}

