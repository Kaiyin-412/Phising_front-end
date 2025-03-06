import React from 'react'
import './Home.css';
import logo from '../picture/Logo.png';
import { useNavigate } from 'react-router';

function Home() {

    const navigate = useNavigate();

    const navigateToMain =(e)=>{
        e.preventDefault();
        navigate('./Scan')
    }

  return (
    <div className='Home-class'>
        <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </section>
        <div className='Home-container'>
            <div className='Home-logo'>
                <img src={logo} alt='logo-image'/>
            </div>
            <div className='Home-component'>
                <p>Detecting Phising Website</p>
                <h1>Your First Line of Defense</h1> 
                <h1>Against Phishing </h1>
            </div>
            <div className='Home-button'>
                <button onClick={(e)=>navigateToMain(e)}>Start</button>
            </div>
        </div>
    </div>
  )
}

export default Home