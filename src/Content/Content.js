import React from 'react';
import './Content.css';

function Content() {
  return (
    <div className='Content-container'>
        <div className='Content-header'>
            <h1>PHISHSHIELD</h1>
        </div>
        <div className='Content-content'>
            <input required ></input>
            <button>Scan</button>
        </div>
    </div>
  )
}

export default Content