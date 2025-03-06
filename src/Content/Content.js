import React from 'react';
import './Content.css';
import { Globe } from "lucide-react";

function Content() {
  return (
    <div className='Content-container'>
        <div className='Content-header'>
            <h1>PHISHSHIELD</h1>
        </div>
        <div className='Content-description'>
             <p>Analyze suspicious URLs, domains, and IPs to identify phishing threats using AI, helping </p>
             <p> detect potential cyber attacks while contributing to security intelligence.</p>
        </div>
        <div className='Content-icon'>
          <Globe size={100} color="#7D85DF" />
        </div>
        <div className='Content-content'>
            
            <input required placeholder='URL to scan'></input>
            <button>Scan</button>
        </div>
    </div>
  )
}

export default Content