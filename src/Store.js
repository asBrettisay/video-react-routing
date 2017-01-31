import React from 'react';

export default function Store(props) {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to The Store Page</h2>
      </div>
      {props.children}
    </div>
  )
}