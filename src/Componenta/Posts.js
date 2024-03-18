import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
export default function Posts() {
    const {data, setData}= useContext(Usecontext1);
    const url = "https://jsonplaceholder.typicode.com/posts";
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
        <div>Title: {elem.title}</div>
        <div>Body: {elem.body}</div>
        <button>Go to Comments</button>
      </div>
    ))}
  </div>
  )
}
