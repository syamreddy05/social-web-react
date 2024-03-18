import React, { useContext } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const { flag, setFlag, UserName1 } = useContext(Usecontext1);

  return (
    <div className="top-nav-container">
      <div className="nav-links">
        <Link to="/feeds">Feeds</Link> | 
        <Link to="/albums">Albums</Link> |
        <Link to="/posts">Posts</Link> | 
        <Link to="/users">Users</Link> | 
        <Link to="/todos">Todos</Link>
      </div>
      <div className="user-info">
        <div>Hello! {UserName1} </div>
        {<div className='user-text'><input type="text" placeholder='Search'></input></div> }
      </div>
      <button className="logout-button" onClick={() => setFlag(0)}>Logout</button>
    </div>
  );
}

export default Home;
