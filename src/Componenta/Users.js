import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
import { useFetch } from './useFetch';
export default function Users() {
    const {data, setData}= useContext(Usecontext1);
    const url = "https://jsonplaceholder.typicode.com/users?userId=1";
  useFetch(url);

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
        <hr></hr>
        
        
      </div>
    ))}
  </div>
  )
}

