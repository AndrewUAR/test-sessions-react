import React from 'react';

const Dashboard = (props) => {
  return (
    <div className='app'>
      <h1>Dashboard</h1>
      <h1>Status: {props.loggedInStatus}</h1>
    </div>
  )
}

export default Dashboard;