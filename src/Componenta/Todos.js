import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
export default function Todos() {
    const {data, setData}= useContext(Usecontext1);
    const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <div className="feeds-container">
    {data && data.map((elem) => (
      <div key={elem.id}>
        <div>UserId: {elem.userId}</div>
        <div>Id: {elem.id}</div>
        <div>Title: {elem.title}</div>
        <div>Completed: {elem.completed}</div><br></br>
      </div>
    ))}
  </div>
  )
}

