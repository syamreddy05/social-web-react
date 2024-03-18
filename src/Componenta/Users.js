import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
export default function Users() {
    const {data, setData}= useContext(Usecontext1);
    const url = "https://jsonplaceholder.typicode.com/users";
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
        <div>Id: {elem.id}</div>
        <div>Name: {elem.name}</div>
        <div>Username: {elem.username}</div>
        <div>Email: {elem.email}</div>
        <div>Phone: {elem.phone}</div>
        <div>Website: {elem.website}</div>
        <br></br>
        
        
      </div>
    ))}
  </div>
  )
}

