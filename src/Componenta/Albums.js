import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
import './Feeds.css';
export default function Albums() {
    const {data, setData}= useContext(Usecontext1);
    const url = "https://jsonplaceholder.typicode.com/albums";
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
        <div>Title: {elem.title}</div><br></br>
        
      </div>
    ))}
  </div>
  )
}
